<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.!n&#&-xT=MV>}E WR>Zu]ph$4b8~zgWj{J7cB;9!+NQQR8/;+Jw<|]Yn~mV$N!)' );
define( 'SECURE_AUTH_KEY',  'ds-?k3/o<&g*ym~GuoZ-^ok4M5*]aQwev*lms]P) ?l-qT37lwaUn#?{f1(.j?]]' );
define( 'LOGGED_IN_KEY',    '-FrBVpuIN_Ox8{!QLLu0V|D6o>O7.!*zk>e;*m$oaw)wsZK&clIFK.k/ZBh_0y*H' );
define( 'NONCE_KEY',        'H&T33!-U6F3NHm]XECG {$8)+wnFuw:LvUd,)R :2M=e}IA(3jKI@BV J=`}u#Z{' );
define( 'AUTH_SALT',        '[o&Z]EuHH@!ijbP_Bb[4ne%7;%r=Rk]`s2Tm$Q|+ggEq+0UJWSwhG.3CegXO-oDN' );
define( 'SECURE_AUTH_SALT', 'WVg{Z7x+SDf$:, @o=uc,sj7hAS;M%J:M/<v|=RhO1=&e@PZm5~L/aV5~2n6uI&&' );
define( 'LOGGED_IN_SALT',   '^aYUoX`rJ!dJztWF?-!}L;!4vaJTiuI9^>&&-z]<w3.i^mtn<d5|qd u#rWksXw-' );
define( 'NONCE_SALT',       'Sapn>%}wZbZho+HiOfNCn-dPy$gHah-BP9E9r.X0Q9MxZ`tRV_GZ3pjRe(+5#Cuk' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
