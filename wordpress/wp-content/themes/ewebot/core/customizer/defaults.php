<?php

add_filter(
	'gt3/core/customizer/defaults', function($defaults){
	return array_merge(
		$defaults, array(
		/* == General == */
		'404_page_id'                        => '',
		'responsive'                         => true,
		'page_comments'                      => true,
		'back_to_top'                        => true,
		'bubbles_block'                      => false,
		'page_404_bg'                        => '',
		'disable_right_click'                => false,
		'disable_right_click_text'           => esc_html__('The right click is disabled. Your content is protected. You can configure this option in the theme.', 'ewebot'),
		'custom_js'                          => "jQuery(document).ready(function(){\n\n});",
		'header_custom_js'                   => "<script type='text/javascript'>\njQuery(document).ready(function(){\n\n});\n</script>",
		/* == Preloader == */
		'preloader'                          => false,
		'preloader_type'                     => 'circle',
		'preloader_background'               => '#191a1c',
		'preloader_item_color'               => '#FFFFFF',
		'preloader_item_color2'              => '#435bb2',
		'preloader_item_width'               => '140',
		'preloader_item_stroke'              => '3',
		'preloader_item_logo'                => '',
		'preloader_item_logo_width'          => '3',
		'preloader_full'                     => false,
		/* == Page Title == */
		'page_title_conditional'             => true,
		'page_title_breadcrumbs_conditional' => true,
		'page_title_names_conditional'        => true,
		'page_title_vert_align'              => 'middle',
		'page_title_horiz_align'             => 'center',
		'page_title_font_color'              => '#ffffff',
		'page_title_bg_color'                => '#6a27d9',
		'page_title_overlay_color'           => '',
		'page_title_bg_image_image'          => '',
		'page_title_bg_image_repeat'         => 'no-repeat',
		'page_title_bg_image_size'           => 'cover',
		'page_title_bg_image_attachment'     => 'scroll',
		'page_title_bg_image_position'       => 'center center',
		'page_title_height'                  => '260',
		'page_title_top_border'              => false,
		'page_title_top_border_color'        => 'rgba(25,26,28,1)',
		'page_title_bottom_border'           => false,
		'page_title_bottom_border_color'     => 'rgba(25,26,28,1)',
		'page_title_bottom_margin'           => '80',
		/* == Blog == */
		'related_posts'                      => true,
		'related_posts_filter'               => 'tag',
		'author_box'                         => true,
		'post_comments'                      => true,
		'post_pingbacks'                     => true,
		'blog_post_likes'                    => false,
		'blog_post_share'                    => true,
		'blog_post_listing_content'          => false,
		/* == Post Types == */
		'blog_title_conditional'             => true,
		'team_title_conditional'             => false,
		'portfolio_title_conditional'        => true,
		'team_slug'                          => '',
		'portfolio_slug'                     => '',
		'portfolio_name'                     => '',
		'portfolio_archive_layout'           => '3',
		/* == Sidebars == */
		'sidebars'                           => [],
		'page_sidebar_layout'                => 'right',
		'page_sidebar_def'                   => 'sidebar_main-sidebar',
		'blog_single_sidebar_layout'         => 'right',
		'blog_single_sidebar_def'            => 'sidebar_main-sidebar',
		'portfolio_single_sidebar_layout'    => 'none',
		'portfolio_single_sidebar_def'       => 'sidebar_main-sidebar',
		'team_single_sidebar_layout'         => 'none',
		'team_single_sidebar_def'            => 'sidebar_main-sidebar',
		/* == Google Map == */
		'google_map_latitude'                => '-37.8172507',
		'google_map_longitude'               => '144.9535833',
		'zoom_map'                           => '14',
		'map_marker_info'                    => true,
		'custom_map_marker'                  => '',
		'map_marker_info_street_number'      => '',
		'map_marker_info_street'             => '',
		'map_marker_info_descr'              => '',
		'map_marker_info_background'         => '#0a0b0b',
		'map_marker_info_color'              => '#ffffff',
		'custom_map_style'                   => false,
		'custom_map_code'                    => '',
		/* == Optimization == */
		'butt_clear'                         => '',
		'optimize_css'                       => false,
		'optimize_js'                        => false,
		'optimize_woo'                       => false,
		'optimize_migrate'                   => false,
		/* == Shop Global Settings == */
		'modern_shop'                        => true,
		'theme-modern_content-color'         => '#69747f',
		'theme-modern_header-color'          => '#1a1d20',
		'theme-modern_custom-color'          => '#3b3564',
		'gallery_images_count'               => '3',
		'products_layout'                    => 'container',
		'products_sidebar_layout'            => 'left',
		'products_sidebar_def'               => 'sidebar_shop-sidebar',
		'products_per_page_frontend'         => false,
		'products_sorting_frontend'          => false,
		'products_infinite_scroll'           => 'none',
		'woocommerce_pagination'             => 'top_bottom',
		'woocommerce_grid_list'              => 'off',
		'label_color_sale'                   => 'rgba(230,55,100,1)',
		'label_color_hot'                    => 'rgba(113,208,128,1)',
		'label_color_new'                    => 'rgba(106,209,228,1)',
		'label_color_sale_modern'            => 'rgba(233,54,49,1)',
		'label_color_hot_modern'             => 'rgba(44,138,34,1)',
		'label_color_new_modern'             => 'rgba(26,29,32,1)',
		/* == Shop Product Page == */
		'product_layout'                     => 'horizontal',
		'activate_carousel_thumb'            => false,
		'product_container'                  => 'container',
		'product_sidebar_layout'             => 'none',
		'product_sidebar_def'                => '',
		'shop_size_guide'                    => false,
		'size_guide'                         => '',
		'next_prev_product'                  => true,
		'product_sharing'                    => true,
		/* == Shop Page Title == */
		'shop_cat_title_conditional'         => true,
		'product_title_conditional'          => false,
		'customize_shop_title'               => false,
		'shop_title_vert_align'              => 'middle',
		'shop_title_horiz_align'             => 'left',
		'shop_title_font_color'              => '#ffffff',
		'shop_title_bg_color'                => '#0a0b0b',
		'shop_title_overlay_color'           => '',
		'shop_title_bg_image_image'          => '',
		'shop_title_bg_image_repeat'         => 'no-repeat',
		'shop_title_bg_image_size'           => 'cover',
		'shop_title_bg_image_attachment'     => 'scroll',
		'shop_title_bg_image_position'       => 'center center',
		'shop_title_height'                  => '300',
		'shop_title_top_border'              => false,
		'shop_title_top_border_color'        => 'rgba(10,11,11,1)',
		'shop_title_bottom_border'           => false,
		'shop_title_bottom_border_color'     => 'rgba(10,11,11,1)',
		'shop_title_bottom_margin'           => '60',
	)
	);
}
);

add_filter(
	'gt3/core/customizer/elementor/defaults', function($defaults){
	$defaults['system_typography'] = array(
		array(
			'_id'                        => 'theme-main',
			'title'                      => 'Theme Main',
			"typography_typography"      => 'custom',
			"typography_font_family"     => 'Rubik',
			"typography_font_size"       => array(
				"unit"  => "px",
				"size"  => "18",
				"sizes" => array()
			),
			"typography_font_weight"     => '400',
			"typography_text_transform"  => '',
			"typography_font_style"      => '',
			"typography_text_decoration" => '',
			"typography_line_height"     => array(
				"unit"  => "px",
				"size"  => "27",
				"sizes" => array()
			),
			"typography_letter_spacing"  => ''
		),
		array(
			'_id'                        => 'theme-secondary',
			'title'                      => 'Theme Secondary',
			"typography_typography"      => 'custom',
			"typography_font_family"     => 'Nunito',
			"typography_font_size"       => array(
				"unit"  => "px",
				"size"  => "18",
				"sizes" => array()
			),
			"typography_font_weight"     => '400',
			"typography_text_transform"  => '',
			"typography_font_style"      => '',
			"typography_text_decoration" => '',
			"typography_line_height"     => array(
				"unit"  => "px",
				"size"  => "27",
				"sizes" => array()
			),
			"typography_letter_spacing"  => ''
		),
		array(
			'_id'                        => 'theme-headers',
			'title'                      => 'Theme Headers',
			"typography_typography"      => 'custom',
			"typography_font_family"     => 'Nunito',
			"typography_font_size"       => '',
			"typography_font_weight"     => '800',
			"typography_text_transform"  => '',
			"typography_font_style"      => '',
			"typography_text_decoration" => '',
			"typography_line_height"     => '',
			"typography_letter_spacing"  => ''
		),
		array(
			'_id'                        => 'theme-modern-shop-main',
			'title'                      => 'Theme Main (Modern Shop)',
			"typography_typography"      => 'custom',
			"typography_font_family"     => 'Roboto',
			"typography_font_size"       => array(
				"unit"  => "px",
				"size"  => "16",
				"sizes" => array()
			),
			"typography_font_weight"     => '300',
			"typography_text_transform"  => '',
			"typography_font_style"      => '',
			"typography_text_decoration" => '',
			"typography_line_height"     => array(
				"unit"  => "px",
				"size"  => "27",
				"sizes" => array()
			),
			"typography_letter_spacing"  => ''
		),
		array(
			'_id'                        => 'theme-modern-shop-headers',
			'title'                      => 'Theme Headers (Modern Shop)',
			"typography_typography"      => 'custom',
			"typography_font_family"     => 'Manrope',
			"typography_font_size"       => array(
				"unit"  => "px",
				"size"  => "18",
				"sizes" => array()
			),
			"typography_font_weight"     => '600',
			"typography_text_transform"  => '',
			"typography_font_style"      => '',
			"typography_text_decoration" => '',
			"typography_line_height"     => array(
				"unit"  => "px",
				"size"  => "27",
				"sizes" => array()
			),
			"typography_letter_spacing"  => ''
		),
	);

	$defaults['system_colors'] = array(
		array(
			"_id"   => "theme-custom-color",
			"title" => "Theme Color",
			"color" => "#6254e7",
		),
		array(
			"_id"   => "theme-custom-color2",
			"title" => "Theme Color2",
			"color" => "#ff7426",
		),
		array(
			"_id"   => "theme-content-color",
			"title" => "Theme Content Color",
			"color" => "#696687",
		),
		array(
			"_id"   => "theme-secondary-color",
			"title" => "Theme Secondary Color",
			"color" => "#696687",
		),
		array(
			"_id"   => "theme-custom-color-start",
			"title" => "Theme Color Gradient Start",
			"color" => "#9289f1",
		),
		array(
			"_id"   => "theme-custom-color2-start",
			"title" => "Theme Color2 Gradient Start",
			"color" => "#f0ac0e",
		),
		array(
			"_id"   => "theme-header-font-color",
			"title" => "Theme Headers Color",
			"color" => "#3b3663",
		),
		array(
			"_id"   => "theme-body-bg-color",
			"title" => "Theme Body Background Color",
			"color" => "#ffffff",
		)
	);

	$defaults['__globals__'] = array(
		'body_color'                 => 'globals/colors?id=theme-content-color',
		'body_background_color'      => 'globals/colors?id=theme-body-bg-color',
		'body_typography_typography' => 'globals/typography?id=theme-main',
	);

	$defaults['h1_typography_typography'] = array(
		"typography"      => 'custom',
		"font_family"     => '',
		"font_size"       => array(
			"unit"  => "px",
			"size"  => "40",
			"sizes" => array()
		),
		"font_weight"     => '',
		"text_transform"  => '',
		"font_style"      => '',
		"text_decoration" => '',
		"line_height"     => array(
			"unit"  => "px",
			"size"  => "43",
			"sizes" => array()
		),
		"letter_spacing"  => ''
	);

	$defaults['h2_typography_typography'] = array(
		"typography"      => 'custom',
		"font_family"     => '',
		"font_size"       => array(
			"unit"  => "px",
			"size"  => "30",
			"sizes" => array()
		),
		"font_weight"     => '',
		"text_transform"  => '',
		"font_style"      => '',
		"text_decoration" => '',
		"line_height"     => array(
			"unit"  => "px",
			"size"  => "40",
			"sizes" => array()
		),
		"letter_spacing"  => ''
	);

	$defaults['h3_typography_typography'] = array(
		"typography"      => 'custom',
		"font_family"     => '',
		"font_size"       => array(
			"unit"  => "px",
			"size"  => "24",
			"sizes" => array()
		),
		"font_weight"     => '',
		"text_transform"  => '',
		"font_style"      => '',
		"text_decoration" => '',
		"line_height"     => array(
			"unit"  => "px",
			"size"  => "30",
			"sizes" => array()
		),
		"letter_spacing"  => ''
	);

	$defaults['h4_typography_typography'] = array(
		"typography"      => 'custom',
		"font_family"     => '',
		"font_size"       => array(
			"unit"  => "px",
			"size"  => "20",
			"sizes" => array()
		),
		"font_weight"     => '',
		"text_transform"  => '',
		"font_style"      => '',
		"text_decoration" => '',
		"line_height"     => array(
			"unit"  => "px",
			"size"  => "33",
			"sizes" => array()
		),
		"letter_spacing"  => ''
	);

	$defaults['h5_typography_typography'] = array(
		"typography"      => 'custom',
		"font_family"     => 'Nunito',
		"font_size"       => array(
			"unit"  => "px",
			"size"  => "18",
			"sizes" => array()
		),
		"font_weight"     => '700',
		"text_transform"  => '',
		"font_style"      => '',
		"text_decoration" => '',
		"line_height"     => array(
			"unit"  => "px",
			"size"  => "30",
			"sizes" => array()
		),
		"letter_spacing"  => ''
	);

	$defaults['h6_typography_typography'] = array(
		"typography"      => 'custom',
		"font_family"     => 'Nunito',
		"font_size"       => array(
			"unit"  => "px",
			"size"  => "16",
			"sizes" => array()
		),
		"font_weight"     => '600',
		"text_transform"  => '',
		"font_style"      => '',
		"text_decoration" => '',
		"line_height"     => array(
			"unit"  => "px",
			"size"  => "24",
			"sizes" => array()
		),
		"letter_spacing"  => ''
	);

	$defaults['body_background_background'] = 'classic';

	return $defaults;
}
);

add_filter('gt3/core/customizer/elementor/convert_fields', function($def){
	return array_merge($def, array(
		/* Fonts */
		'main-font'                 => array(
			'font'  => array( 'field' => 'system_typography', 'id' => 'theme-main' ),
			'color' => array( 'field' => 'system_colors', 'id' => 'theme-content-color' ),
		),
		'secondary-font'            => array(
			'font'  => array( 'field' => 'system_typography', 'id' => 'theme-secondary' ),
			'color' => array( 'field' => 'system_colors', 'id' => 'theme-secondary-color' ),
		),
		'header-font'               => array(
			'font'  => array( 'field' => 'system_typography', 'id' => 'theme-headers' ),
			'color' => array( 'field' => 'system_colors', 'id' => 'theme-header-font-color' ),
		),
		'h1-font'                   => array(
			'font' => 'h1_typography',
		),
		'h2-font'                   => array(
			'font' => 'h2_typography',
		),
		'h3-font'                   => array(
			'font' => 'h3_typography',
		),
		'h4-font'                   => array(
			'font' => 'h4_typography',
		),
		'h5-font'                   => array(
			'font' => 'h5_typography',
		),
		'h6-font'                   => array(
			'font' => 'h6_typography',
		),
		'modern_shop_main-font'     => array(
			'font' => array( 'field' => 'system_typography', 'id' => 'theme-modern-shop-main' ),
		),
		'modern_shop_header-font'   => array(
			'font' => array( 'field' => 'system_typography', 'id' => 'theme-modern-shop-headers' ),
		),
		/* Colors */
		'theme-custom-color'        => array(
			'color' => array( 'field' => 'system_colors', 'id' => 'theme-custom-color' )
		),
		'theme-custom-color2'       => array(
			'color' => array( 'field' => 'system_colors', 'id' => 'theme-custom-color2' )
		),
		'theme-custom-color-start'  => array(
			'color' => array( 'field' => 'system_colors', 'id' => 'theme-custom-color-start' )
		),
		'theme-custom-color2-start' => array(
			'color' => array( 'field' => 'system_colors', 'id' => 'theme-custom-color2-start' )
		),
		'body-background-color'     => array(
			'color' => array( 'field' => 'system_colors', 'id' => 'theme-body-bg-color' )
		),

		/*
					'map-marker-font'         => '',
					'modern_shop_main-font'   => '',
					'modern_shop_header-font' => '',*/

	));
});
