<?php
/**
 * Plugin Name:       Shiki My Code
 * Description:       A block to highlight code using Shiki.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            WPPerformance
 * Author URI:        https://www.wp-performance.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       shiki-my-code
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_shiki_my_code_block_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'create_block_shiki_my_code_block_init' );
