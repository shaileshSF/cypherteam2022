<?php

namespace GT3\ThemesCore\Customizer;

use GT3\ThemesCore\DashBoard;

trait Convert_Trait {
	private $old_options       = array();
	private $converted_options = array();
	private $new_options       = array();

	private $current_key   = '';
	private $current_value = '';
	private $current_args  = '';

	protected function get_customizer_fields(){
		return array(
			/* == General == */
			'404_page_id'                        => Types::TYPE_STRING,
			'responsive'                         => Types::TYPE_BOOL,
			'page_comments'                      => Types::TYPE_BOOL,
			'back_to_top'                        => Types::TYPE_BOOL,
			'bubbles_block'                      => Types::TYPE_BOOL,
			'page_404_bg'                        => Types::TYPE_IMAGE,
			'disable_right_click'                => Types::TYPE_BOOL,
			'disable_right_click_text'           => Types::TYPE_STRING,
			'custom_js'                          => Types::TYPE_STRING,
			'header_custom_js'                   => Types::TYPE_STRING,
			/* == Preloader == */
			'preloader'                          => Types::TYPE_BOOL,
			'preloader_type'                     => Types::TYPE_STRING,
			'preloader_background'               => Types::TYPE_COLOR,
			'preloader_item_color'               => Types::TYPE_COLOR,
			'preloader_item_color2'              => Types::TYPE_COLOR,
			'preloader_item_width'               => array( 'fn' => Types::TYPE_ARRAY, 'args' => array( 'field' => 'width', 'filter_func' => 'intval' ) ),
			'preloader_item_stroke'              => array( 'fn' => Types::TYPE_ARRAY, 'args' => array( 'field' => 'width', 'filter_func' => 'intval' ) ),
			'preloader_item_logo'                => Types::TYPE_IMAGE,
			'preloader_item_logo_width'          => array( 'fn' => Types::TYPE_ARRAY, 'args' => array( 'field' => 'width', 'filter_func' => 'intval' ) ),
			'preloader_full'                     => Types::TYPE_BOOL,
			/* == Page Title == */
			'page_title_conditional'             => Types::TYPE_BOOL,
			'page_title_breadcrumbs_conditional' => Types::TYPE_BOOL,
			'page_title_vert_align'              => Types::TYPE_STRING,
			'page_title_horiz_align'             => Types::TYPE_STRING,
			'page_title_font_color'              => Types::TYPE_COLOR,
			'page_title_bg_color'                => Types::TYPE_COLOR,
			'page_title_overlay_color'           => Types::TYPE_COLOR,
			'page_title_bg_image_image'          => array( 'fn' => Types::TYPE_BACKGROUND, 'args' => array( 'field' => 'page_title_bg_image' ) ),
			'page_title_bg_image_repeat'         => Types::TYPE_STRING,
			'page_title_bg_image_size'           => Types::TYPE_STRING,
			'page_title_bg_image_attachment'     => Types::TYPE_STRING,
			'page_title_bg_image_position'       => Types::TYPE_STRING,
			'page_title_height'                  => array( 'fn' => Types::TYPE_ARRAY, 'args' => array( 'field' => 'height', 'filter_func' => 'intval' ) ),
			'page_title_top_border'              => Types::TYPE_BOOL,
			'page_title_top_border_color'        => Types::TYPE_COLOR,
			'page_title_bottom_border'           => Types::TYPE_BOOL,
			'page_title_bottom_border_color'     => Types::TYPE_COLOR,
			'page_title_bottom_margin'           => array( 'fn' => Types::TYPE_ARRAY, 'args' => array( 'field' => 'margin-bottom', 'filter_func' => 'intval' ) ),
			/* == Blog == */
			'related_posts'                      => Types::TYPE_BOOL,
			'related_posts_filter'               => Types::TYPE_STRING,
			'author_box'                         => Types::TYPE_BOOL,
			'post_comments'                      => Types::TYPE_BOOL,
			'post_pingbacks'                     => Types::TYPE_BOOL,
			'blog_post_likes'                    => Types::TYPE_BOOL,
			'blog_post_share'                    => Types::TYPE_BOOL,
			'blog_post_listing_content'          => Types::TYPE_BOOL,
			'blog_post_fimage_animation'         => Types::TYPE_BOOL,
			/* == Post Types == */
			'blog_title_conditional'             => Types::TYPE_BOOL,
			'team_title_conditional'             => Types::TYPE_BOOL,
			'portfolio_title_conditional'        => Types::TYPE_BOOL,
			'team_slug'                          => Types::TYPE_STRING,
			'portfolio_slug'                     => Types::TYPE_STRING,
			'portfolio_name'                     => Types::TYPE_STRING,
			'portfolio_archive_layout'           => Types::TYPE_STRING,
			/* == Sidebars == */
			'sidebars'                           => Types::TYPE_ARRAY,
			'page_sidebar_layout'                => Types::TYPE_STRING,
			'page_sidebar_def'                   => Types::TYPE_STRING,
			'blog_single_sidebar_layout'         => Types::TYPE_STRING,
			'blog_single_sidebar_def'            => Types::TYPE_STRING,
			'portfolio_single_sidebar_layout'    => Types::TYPE_STRING,
			'portfolio_single_sidebar_def'       => Types::TYPE_STRING,
			'team_single_sidebar_layout'         => Types::TYPE_STRING,
			'team_single_sidebar_def'            => Types::TYPE_STRING,
			/* == Google Map == */
			'google_map_latitude'                => Types::TYPE_STRING,
			'google_map_longitude'               => Types::TYPE_STRING,
			'zoom_map'                           => Types::TYPE_STRING,
			'map_marker_info'                    => Types::TYPE_BOOL,
			'custom_map_marker'                  => Types::TYPE_STRING,
			'map_marker_info_street_number'      => Types::TYPE_STRING,
			'map_marker_info_street'             => Types::TYPE_STRING,
			'map_marker_info_descr'              => Types::TYPE_STRING,
			'map_marker_info_background'         => Types::TYPE_STRING,
			'map_marker_info_color'              => Types::TYPE_COLOR,
			'custom_map_style'                   => Types::TYPE_BOOL,
			'custom_map_code'                    => Types::TYPE_STRING,
			/* == Optimization == */
			'butt_clear'                         => Types::TYPE_STRING,
			'optimize_css'                       => Types::TYPE_BOOL,
			'optimize_js'                        => Types::TYPE_BOOL,
			'optimize_woo'                       => Types::TYPE_BOOL,
			'optimize_migrate'                   => Types::TYPE_BOOL,
			'disable_elementor_font'             => Types::TYPE_BOOL,
			/* == Shop Global Settings == */
			'modern_shop'                        => Types::TYPE_BOOL,
			'gallery_images_count'               => Types::TYPE_STRING,
			'products_layout'                    => Types::TYPE_STRING,
			'products_sidebar_layout'            => Types::TYPE_STRING,
			'products_sidebar_def'               => Types::TYPE_STRING,
			'products_per_page_frontend'         => Types::TYPE_BOOL,
			'products_sorting_frontend'          => Types::TYPE_BOOL,
			'products_infinite_scroll'           => Types::TYPE_STRING,
			'woocommerce_pagination'             => Types::TYPE_STRING,
			'woocommerce_grid_list'              => Types::TYPE_STRING,
			'label_color_sale'                   => Types::TYPE_COLOR,
			'label_color_hot'                    => Types::TYPE_COLOR,
			'label_color_new'                    => Types::TYPE_COLOR,
			'label_color_sale_modern'            => Types::TYPE_COLOR,
			'label_color_hot_modern'             => Types::TYPE_COLOR,
			'label_color_new_modern'             => Types::TYPE_COLOR,
			/* == Shop Product Page == */
			'product_layout'                     => Types::TYPE_STRING,
			'activate_carousel_thumb'            => Types::TYPE_BOOL,
			'product_container'                  => Types::TYPE_STRING,
			'product_sidebar_layout'             => Types::TYPE_STRING,
			'product_sidebar_def'                => Types::TYPE_STRING,
			'shop_size_guide'                    => Types::TYPE_BOOL,
			'size_guide'                         => Types::TYPE_IMAGE,
			'next_prev_product'                  => Types::TYPE_BOOL,
			'product_sharing'                    => Types::TYPE_BOOL,
			/* == Shop Page Title == */
			'shop_cat_title_conditional'         => Types::TYPE_BOOL,
			'product_title_conditional'          => Types::TYPE_BOOL,
			'customize_shop_title'               => Types::TYPE_BOOL,
			'shop_title_vert_align'              => Types::TYPE_STRING,
			'shop_title_horiz_align'             => Types::TYPE_STRING,
			'shop_title_font_color'              => Types::TYPE_COLOR,
			'shop_title_bg_color'                => Types::TYPE_COLOR,
			'shop_title_overlay_color'           => Types::TYPE_COLOR,
			'shop_title_bg_image_image'          => array( 'fn' => Types::TYPE_BACKGROUND, 'args' => array( 'field' => 'shop_title_bg_image' ) ),
			'shop_title_bg_image_repeat'         => Types::TYPE_STRING,
			'shop_title_bg_image_size'           => Types::TYPE_STRING,
			'shop_title_bg_image_attachment'     => Types::TYPE_STRING,
			'shop_title_bg_image_position'       => Types::TYPE_STRING,
			'shop_title_height'                  => array( 'fn' => Types::TYPE_ARRAY, 'args' => array( 'field' => 'height', 'filter_func' => 'intval' ) ),
			'shop_title_top_border'              => Types::TYPE_BOOL,
			'shop_title_top_border_color'        => Types::TYPE_COLOR,
			'shop_title_bottom_border'           => Types::TYPE_BOOL,
			'shop_title_bottom_border_color'     => Types::TYPE_COLOR,
			'shop_title_bottom_margin'           => array( 'fn' => Types::TYPE_ARRAY, 'args' => array( 'field' => 'margin-bottom', 'filter_func' => 'intval' ) ),
		);
	}



	protected function convert(){
		$theme             = DashBoard::instance()->get_theme();
		$this->old_options = get_option($theme, false);
		if(false === $this->old_options) {
			return array();
		}
		if (did_action('elementor/init')) {
			$this->convert_elementor();
		} else add_action('elementor/init', array($this, 'convert_elementor'));

		$this->converted_options = array();

		$this->new_options = $this->get_customizer_fields();

		foreach($this->new_options as $key => $type) {
			$this->current_key = $key;
			$new_value         = key_exists($key, $this->old_options) ? $this->old_options[$key] : null;
			$new_value         = $this->convert_field($type, $new_value);

			if(null !== $new_value) {
				$this->converted_options[$key] = $new_value;
			}
		}

		return 	$this->converted_options;
	}

	public function convert_elementor() {
		Elementor::convert_fields($this->old_options);
//		do_action('gt3/core/customizer/elementor/convert', $this->old_options);
	}

	/**
	 * @return array
	 */

	private function convert_field($type, $value, $args = array()){
		$new_value = null;

		switch($type) {
			case Types::TYPE_INT:
				$new_value = $this->convert_int($value);
				break;
			case Types::TYPE_FLOAT:
				$new_value = $this->convert_float($value);

				break;
			case Types::TYPE_BOOL:
				$new_value = $this->convert_bool($value);
				break;
			case Types::TYPE_ARRAY:
				$field = key_exists('field', $args) ? $args['field'] : null;

				if(null !== $field) {
					$new_value = $this->convert_array($value, $field);
				} else {
					$new_value = $value;
				}

				if (key_exists('filter_func', $args) && is_callable($args['filter_func'])) {
					$new_value = call_user_func($args['filter_func'], $new_value);
				}

				break;
			case Types::TYPE_STRING:
				$new_value = $this->convert_string($value);
				break;
			case Types::TYPE_IMAGE:
				$new_value = $this->convert_image($value);
				break;
			case Types::TYPE_BACKGROUND:
				$field = $args['field'];

				$new_value = key_exists($field, $this->old_options) ? $this->old_options[$field] : null;
				$new_value = $this->convert_background($new_value);

				foreach($new_value as $key => $value) {
					$this->converted_options[$field.'_'.$key] = $value;
				}

				$new_value = null;

				break;
			case Types::TYPE_COLOR:
				$new_value = $this->convert_color($value);
				break;
			default:
				if(is_array($type)) {
					$fn = key_exists('fn', $type) ? $type['fn'] : null;
					if(null !== $fn) {
						$new_value = $this->convert_field($fn, $value, $type['args']);
					}
				}
				break;
		}

		return $new_value;
	}

	/** @return int */
	private function convert_int($value){
		return intval($value);
	}

	/** @return float */
	private function convert_float($value){
		return floatval($value);
	}

	/** @return  boolean */
	private function convert_bool($value){
		return in_array($value, array( 'on', 'yes', 'true' ), true) ? true :
			(in_array($value, array( 'off', 'no', 'false' ), true) ? false :
				(bool) $value);
	}

	private function convert_image($value){
		$args = array_merge(
			array(
				"url"         => false,
				"id"          => "",
				"height"      => "",
				"width"       => "",
				"thumbnail"   => false,
				"title"       => "",
				"caption"     => "",
				"alt"         => "",
				"description" => "",
			), (array) $value
		);

		$id = '';

		if(isset($args['id']) && !empty($args['id'])) {
			$id = intval($args['id']);
		}

		return $id;
	}

	private function convert_background($value){
		$args = array_merge(
			array(
				"background-repeat"     => "",
				"background-size"       => "",
				"background-attachment" => "",
				"background-position"   => "",
				"background-image"      => "",
				"media"                 => array(
					"id"        => "",
					"height"    => "",
					"width"     => "",
					"thumbnail" => "",
				)
			), (array) $value
		);

		$value = array(
			'repeat'     => $args['background-repeat'],
			'size'       => $args['background-size'],
			'attachment' => $args['background-attachment'],
			'position'   => $args['background-position'],
			'image'      => $args['media']['id'],
		);

		return $value;
	}

	/** @return string */
	private function convert_string($value){
		return $value;//strval($value);
	}

	private function convert_array($arr, $key){
		return key_exists($key, $arr) ? $arr[$key] : null;
	}

	/** @return string */
	private function convert_color($value){
		switch(gettype($value)) {
			case 'array':
				$value = key_exists('rgba', $value) ? $value['rgba'] : (key_exists('color', $value) ? $value['color'] : '');
				break;
			case 'string':
				break;
			default:
				$value = '';
				break;
		}

		return $value;
	}

}
