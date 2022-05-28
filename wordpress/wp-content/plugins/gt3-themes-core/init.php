<?php

use GT3\ThemesCore\Assets;
use GT3\ThemesCore\Logs;

if(!defined('ABSPATH')) {
	exit;
}

//Variable
$gt3_theme_check          = wp_get_theme();
$gt3_theme_check_template = $gt3_theme_check->get('Template');
$options_name             = !empty($gt3_theme_check_template) ? $gt3_theme_check_template : $gt3_theme_check->get('TextDomain');

define('GT3_THEME_OPTIONS_NAME', $options_name);
define('GT3_CORE_WIDGETS_IMG', plugin_dir_url(__FILE__).'core/elementor/assets/image/');
define('GT3_CORE_URL', plugin_dir_url(__FILE__));

require_once __DIR__.'/core/autoload.php';
Assets::instance();
Logs::instance();

// Aq_Resizer
require_once __DIR__.'/core/aq_resizer.php';

//Post type
require_once __DIR__.'/core/cpt/init.php';

//Load meta-box
require_once __DIR__.'/core/meta-box/meta-box.php';
require_once __DIR__.'/core/metabox-addon.php';
require_once __DIR__.'/core/theme-adding-functions.php';
require_once __DIR__.'/core/theme_icons_svg.php';

//Load assets
require_once __DIR__.'/assets/init.php';

/*column-tabs*/
//require_once __DIR__.'/core/fix_elementor/index.php';

