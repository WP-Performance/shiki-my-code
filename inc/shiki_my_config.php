<?php

/**
 * callback for settings page.
 */
function wpperformance_shiki_my_code_settings_page_html() {
	printf(
		'<div class="wrap" id="wpperformance_shiki_my_code_settings">%s</div>',
		esc_html__( 'Loading…', 'shiki-my-code' )
	);
}

/**
 * Add settings page.
 */
function wpperformance_shiki_my_code_settings_page() {
	add_options_page(
		__( 'Shiki Settings', 'shiki-my-code' ),
		__( 'Shiki Settings', 'shiki-my-code' ),
		'manage_options',
		'wpperformance_shiki_my_code',
		'wpperformance_shiki_my_code_settings_page_html'
	);
}

add_action( 'admin_menu', 'wpperformance_shiki_my_code_settings_page' );


/**
 * Enqueue style and script for settings page.
 */
function wpperformance_shiki_my_code_settings_page_enqueue_style_script( $admin_page ) {
	if ( 'settings_page_wpperformance_shiki_my_code' !== $admin_page ) {
		return;
	}

	$asset_file = plugin_dir_path( __FILE__ ) . '../build/shiki-my-config/index.asset.php';

	if ( ! file_exists( $asset_file ) ) {
		return;
	}

	wp_enqueue_style( 'wp-components' );

	$asset = include $asset_file;

	wp_enqueue_script(
		'wpperformance-shiki-my-code',
		plugins_url( '../build/shiki-my-config/index.js', __FILE__ ),
		$asset['dependencies'],
		$asset['version'],
		array(
			'in_footer' => true,
		)
	);

	wp_enqueue_style(
		'wpperformance-shiki-my-code',
		plugins_url( '../build/shiki-my-config/style-index.css', __FILE__ ),
		array_filter(
			$asset['dependencies'],
			function ( $style ) {
				return wp_style_is( $style, 'registered' );
			}
		),
		$asset['version']
	);
}

add_action( 'admin_enqueue_scripts', 'wpperformance_shiki_my_code_settings_page_enqueue_style_script' );


/**
 * Register settings options.
 */
function wpperformance_shiki_my_code_settings() {
	$default = array(
		'theme_dark'  => 'github-dark-default',
		'theme_light' => 'github-light-default',
		'mode'        => 'view',
	);
	$schema  = array(
		'type'       => 'object',
		'properties' => array(
			'theme_dark'  => array(
				'type' => 'string',
			),
			'theme_light' => array(
				'type' => 'string',
			),
			'mode'        => array(
				'type' => 'string',
			),
		),
	);

	register_setting(
		'options',
		'wpperformance_shiki_my_code',
		array(
			'type'         => 'object',
			'default'      => $default,
			'show_in_rest' => array(
				'schema' => $schema,
			),
		)
	);
}

add_action( 'init', 'wpperformance_shiki_my_code_settings' );

