jQuery(function () {
	"use strict";
	jQuery(document).ready(function ($) {
		if (!(window.gt3pg_lite &&
				gt3pg_lite &&
				gt3pg_lite.plugins &&
				gt3pg_lite.plugins.io)
		) {
			$('.imageSize_optimized_notice_hidden').show();
			$('.gt3pg_lightbox_optimized_notice_hidden').show();
			$('.gt3pg_slider_optimized_notice_hidden').show();
		}


		if (jQuery("input[name='borderType']").val() == "1") jQuery(".border-setting").show(); else jQuery(".border-setting").hide();
		jQuery("input[name='borderType']").on("change", function () {
			if (jQuery("input[name='borderType']").val() == "1") jQuery(".border-setting").show(); else jQuery(".border-setting").hide();
		});
		jQuery('input[name="gt3pg_color_picker"]').wpColorPicker();
		jQuery('.gt3pg_admin_save_all').on("mouseover", function () {
			if (jQuery('input[name="gt3pg_color_picker"]').val() != "undefined")
				jQuery('input[name="borderColor"]').val(jQuery('input[name="gt3pg_color_picker"]').val()).trigger("change").trigger("input").trigger("focus").trigger("blur");
		});

		jQuery('[name="linkTo"]').on('change', function () {
			if (jQuery('[name="linkTo"]').val() == 'lightbox') {
				jQuery('.hidden_linkTo_lightbox').show();
			} else {
				jQuery('.hidden_linkTo_lightbox').hide();
			}
		});

		$('[name="lightboxImageSize"]').on('change', function () {
			if ($(this).val() == 'full') {
				$('.lightboxImageSize_full_hidden').show();
			}
			else {
				$('.lightboxImageSize_full_hidden').hide();
			}
		});

		$('[name="imageSize"]').on('change', function () {
			if ($(this).val() == 'full') $('.hidden_imageSize').show();
			else $('.hidden_imageSize').hide();

		});

		$('[name="sliderImageSize"]').on('change', function () {
			if ($(this).val() == 'full') $('.sliderImageSize_full_hidden').show();
			else $('.sliderImageSize_full_hidden').hide();
		});

		$('[name="linkTo"]').trigger('change');
		$('[name="lightboxImageSize"]').trigger('change');
		$('[name="imageSize"]').trigger('change');
		$('[name="sliderImageSize"]').trigger('change');

		$('.selectBox-disabled [rel="gt3pg_optimized"]').hover(function (e) {
				var not = $('.gt3pg_optimized_notice');
				// console.log(window.innerWidth);
				var w = window.innerWidth;
				var pos = $(this).parent().parent().position();
				var p_pos = $(this).parent().position();
				pos.top += p_pos.top;
				pos.left += p_pos.left;

				if (w <= 782) {
					not.css('left', pos.left + 155).css('top', pos.top - 26).fadeIn(200);
				} else if (w > 782 && w <= 960) {
					not.css('left', pos.left + 110).css('top', pos.top - 12).fadeIn(200);
				} else {
					not.css('left', pos.left - 10).css('top', pos.top - 12).fadeIn(200);
				}
			},
			function () {
				var not = $('.gt3pg_optimized_notice');
				not.fadeOut(200);
			}
		);


		//gt3pg_page_settings
		$(".gt3pg_page_settings .onoff-input").on("change", function () {
			var id = $(this).attr('id');
			if ($(this).prop('checked')) $('[name="' + id + '"]').val(1).trigger('change');
			else $('[name="' + id + '"]').val(0).trigger('change');
		});


	});

	jQuery(".gt3pg_admin_reset_settings").on("click", function () {
		var agree = confirm("Are you sure?");
		if (!agree) {
			return false;
		}
		jQuery.post(ajaxurl, {action: 'gt3_reset_gt3pg_settings'}, function (response) {
			window.location.reload(true);
		});
		return false;
	});

	// Popup
	function gt3pg_show_admin_pop(gt3_message_text, gt3_message_type) {
		// Success - gt3_message_type = 'info_message'
		// Error - gt3_message_type = 'error_message'
		jQuery(".gt3pg_result_message").remove();
		jQuery("body").removeClass('active_message_popup').addClass('active_message_popup');
		jQuery("body").append("<div class='gt3pg_result_message " + gt3_message_type + "'>" + gt3_message_text + "</div>");
		var messagetimer = setTimeout(function () {
			jQuery(".gt3pg_result_message").fadeOut();
			jQuery("body").removeClass('active_message_popup');
			clearTimeout(messagetimer);
		}, 3000);
	}

	jQuery(".gt3pg_page_settings").submit(function (event) {
		event.preventDefault();
		var gt3pg_page_settings = jQuery(this);
		jQuery.post(gt3pg_admin_ajax_url, {
			action: 'gt3_save_gt3pg_options',
			serialize_string: JSON.stringify(gt3pg_page_settings.serializeArray())
		}, function (response) {
			var gt3pg_saved_response = JSON.parse(response);
			gt3pg_show_admin_pop('<b>DONE! You\'ve successfully saved the changes.</b>', 'info_message');
		});
	});

	jQuery(".gt3pg_admin_mix-container2 select").selectBox();


});


/*
 *  jQuery selectBox - A cosmetic, styleable replacement for SELECT elements
 *
 *  Copyright 2012 Cory LaViska for A Beautiful Site, LLC.
 *
 *  https://github.com/claviska/jquery-selectBox
 *
 *  Licensed under both the MIT license and the GNU GPLv2 (same as jQuery: http://jquery.org/license)
 *
 */
if (jQuery)(function($) {
	jQuery.extend(jQuery.fn, {
		selectBox: function(method, data) {
			var typeTimer, typeSearch = '',
				isMac = navigator.platform.match(/mac/i);
			//
			// Private methods
			//
			var init = function(select, data) {
				var options;
				// Disable for iOS devices (their native controls are more suitable for a touch device)
				if (navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)) return false;
				// Element must be a select control
				if (select.tagName.toLowerCase() !== 'select') return false;
				select = jQuery(select);
				if (select.data('selectBox-control')) return false;
				var control = jQuery('<a class="selectBox" />'),
					inline = select.attr('multiple') || parseInt(select.attr('size')) > 1;
				var settings = data || {};
				control.width(select.outerWidth()).addClass(select.attr('class')).attr('title', select.attr('title') || '').attr('tabindex', parseInt(select.attr('tabindex'))).css('display', 'inline-block').bind('focus.selectBox', function() {
					if (this !== document.activeElement && document.body !== document.activeElement) jQuery(document.activeElement).blur();
					if (control.hasClass('selectBox-active')) return;
					control.addClass('selectBox-active');
					select.trigger('focus');
				}).bind('blur.selectBox', function() {
					if (!control.hasClass('selectBox-active')) return;
					control.removeClass('selectBox-active');
					select.trigger('blur');
				});
				if (!jQuery(window).data('selectBox-bindings')) {
					jQuery(window).data('selectBox-bindings', true).bind('scroll.selectBox', hideMenus).bind('resize.selectBox', hideMenus);
				}
				if (select.attr('disabled')) control.addClass('selectBox-disabled');
				// Focus on control when label is clicked
				select.bind('click.selectBox', function(event) {
					control.focus();
					event.preventDefault();
				});
				// Generate control
				if (inline) {
					//
					// Inline controls
					//
					options = getOptions(select, 'inline');
					control.append(options).data('selectBox-options', options).addClass('selectBox-inline selectBox-menuShowing').bind('keydown.selectBox', function(event) {
						handleKeyDown(select, event);
					}).bind('keypress.selectBox', function(event) {
						handleKeyPress(select, event);
					}).bind('mousedown.selectBox', function(event) {
						if (jQuery(event.target).is('A.selectBox-inline')) event.preventDefault();
						if (!control.hasClass('selectBox-focus')) control.focus();
					}).insertAfter(select);
					// Auto-height based on size attribute
					if (!select[0].style.height) {
						var size = select.attr('size') ? parseInt(select.attr('size')) : 5;
						// Draw a dummy control off-screen, measure, and remove it
						var tmp = control.clone().removeAttr('id').css({
							position: 'absolute',
							top: '-9999em'
						}).show().appendTo('body');
						tmp.find('.selectBox-options').html('<li><a>\u00A0</a></li>');
						var optionHeight = parseInt(tmp.find('.selectBox-options A:first').html('&nbsp;').outerHeight());
						tmp.remove();
						control.height(optionHeight * size);
					}
					disableSelection(control);
				} else {
					//
					// Dropdown controls
					//
					var label = jQuery('<span class="selectBox-label" />'),
						arrow = jQuery('<span class="selectBox-arrow" />');
					// Update label
					label.attr('class', getLabelClass(select)).text(getLabelText(select));
					options = getOptions(select, 'dropdown');
					options.appendTo('BODY');
					control.data('selectBox-options', options).addClass('selectBox-dropdown').append(label).append(arrow).bind('mousedown.selectBox', function(event) {
						if (control.hasClass('selectBox-menuShowing')) {
							hideMenus();
						} else {
							event.stopPropagation();
							// Webkit fix to prevent premature selection of options
							options.data('selectBox-down-at-x', event.screenX).data('selectBox-down-at-y', event.screenY);
							showMenu(select);
						}
					}).bind('keydown.selectBox', function(event) {
						handleKeyDown(select, event);
					}).bind('keypress.selectBox', function(event) {
						handleKeyPress(select, event);
					}).bind('open.selectBox', function(event, triggerData) {
						if (triggerData && triggerData._selectBox === true) return;
						showMenu(select);
					}).bind('close.selectBox', function(event, triggerData) {
						if (triggerData && triggerData._selectBox === true) return;
						hideMenus();
					}).insertAfter(select);
					// Set label width
					var labelWidth = control.width() - arrow.outerWidth() - parseInt(label.css('paddingLeft')) - parseInt(label.css('paddingLeft'));
					label.width(labelWidth);
					disableSelection(control);
				}
				// Store data for later use and show the control
				select.addClass('selectBox').data('selectBox-control', control).data('selectBox-settings', settings).hide();
			};
			var getOptions = function(select, type) {
				var options;
				// Private function to handle recursion in the getOptions function.
				var _getOptions = function(select, options) {
					// Loop through the set in order of element children.
					select.children('OPTION, OPTGROUP').each(function() {
						// If the element is an option, add it to the list.
						if (jQuery(this).is('OPTION')) {
							// Check for a value in the option found.
							if (jQuery(this).length > 0) {
								// Create an option form the found element.
								generateOptions(jQuery(this), options);
							} else {
								// No option information found, so add an empty.
								options.append('<li>\u00A0</li>');
							}
						} else {
							// If the element is an option group, add the group and call this function on it.
							var optgroup = jQuery('<li class="selectBox-optgroup" />');
							optgroup.text(jQuery(this).attr('label'));
							options.append(optgroup);
							options = _getOptions(jQuery(this), options);
						}
					});
					// Return the built strin
					return options;
				};
				switch (type) {
					case 'inline':
						options = jQuery('<ul class="selectBox-options" />');
						options = _getOptions(select, options);
						options.find('A').bind('mouseover.selectBox', function(event) {
							addHover(select, jQuery(this).parent());
						}).bind('mouseout.selectBox', function(event) {
							removeHover(select, jQuery(this).parent());
						}).bind('mousedown.selectBox', function(event) {
							event.preventDefault(); // Prevent options from being "dragged"
							if (!select.selectBox('control').hasClass('selectBox-active')) select.selectBox('control').focus();
						}).bind('mouseup.selectBox', function(event) {
							hideMenus();
							selectOption(select, jQuery(this).parent(), event);
						});
						disableSelection(options);
						return options;
					case 'dropdown':
						options = jQuery('<ul class="selectBox-dropdown-menu selectBox-options" />');
						options = _getOptions(select, options);
						options.data('selectBox-select', select).css('display', 'none').appendTo('BODY').find('A').bind('mousedown.selectBox', function(event) {
							event.preventDefault(); // Prevent options from being "dragged"
							if (event.screenX === options.data('selectBox-down-at-x') && event.screenY === options.data('selectBox-down-at-y')) {
								options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');
								hideMenus();
							}
						}).bind('mouseup.selectBox', function(event) {
							if (event.screenX === options.data('selectBox-down-at-x') && event.screenY === options.data('selectBox-down-at-y')) {
								return;
							} else {
								options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');
							}
							selectOption(select, jQuery(this).parent());
							hideMenus();
						}).bind('mouseover.selectBox', function(event) {
							addHover(select, jQuery(this).parent());
						}).bind('mouseout.selectBox', function(event) {
							removeHover(select, jQuery(this).parent());
						});
						// Inherit classes for dropdown menu
						var classes = select.attr('class') || '';
						if (classes !== '') {
							classes = classes.split(' ');
							for (var i in classes) options.addClass(classes[i] + '-selectBox-dropdown-menu');
						}
						disableSelection(options);
						return options;
				}
			};
			var getLabelClass = function(select) {
				var selected = jQuery(select).find('OPTION:selected');
				return ('selectBox-label ' + (selected.attr('class') || '')).replace(/\s+$/, '');
			};
			var getLabelText = function(select) {
				var selected = jQuery(select).find('OPTION:selected');
				return selected.text() || '\u00A0';
			};
			var setLabel = function(select) {
				select = jQuery(select);
				var control = select.data('selectBox-control');
				if (!control) return;
				control.find('.selectBox-label').attr('class', getLabelClass(select)).text(getLabelText(select));
			};
			var destroy = function(select) {
				select = jQuery(select);
				var control = select.data('selectBox-control');
				if (!control) return;
				var options = control.data('selectBox-options');
				options.remove();
				control.remove();
				select.removeClass('selectBox').removeData('selectBox-control').data('selectBox-control', null).removeData('selectBox-settings').data('selectBox-settings', null).show();
			};
			var refresh = function(select) {
				select = jQuery(select);
				select.selectBox('options', select.html());
			};
			var showMenu = function(select) {
				select = jQuery(select);
				var control = select.data('selectBox-control'),
					settings = select.data('selectBox-settings'),
					options = control.data('selectBox-options');
				if (control.hasClass('selectBox-disabled')) return false;
				hideMenus();
				var borderBottomWidth = isNaN(control.css('borderBottomWidth')) ? 0 : parseInt(control.css('borderBottomWidth'));
				// Menu position
				options.width(control.innerWidth()).css({
					top: control.offset().top + control.outerHeight() - borderBottomWidth,
					left: control.offset().left
				});
				if (select.triggerHandler('beforeopen')) return false;
				var dispatchOpenEvent = function() {
					select.triggerHandler('open', {
						_selectBox: true
					});
				};
				// Show menu
				switch (settings.menuTransition) {
					case 'fade':
						options.fadeIn(settings.menuSpeed, dispatchOpenEvent);
						break;
					case 'slide':
						options.slideDown(settings.menuSpeed, dispatchOpenEvent);
						break;
					default:
						options.show(settings.menuSpeed, dispatchOpenEvent);
						break;
				}
				if (!settings.menuSpeed) dispatchOpenEvent();
				// Center on selected option
				var li = options.find('.selectBox-selected:first');
				keepOptionInView(select, li, true);
				addHover(select, li);
				control.addClass('selectBox-menuShowing');
				jQuery(document).bind('mousedown.selectBox', function(event) {
					if (jQuery(event.target).parents().andSelf().hasClass('selectBox-options')) return;
					hideMenus();
				});
			};
			var hideMenus = function() {
				if (jQuery(".selectBox-dropdown-menu:visible").length === 0) return;
				jQuery(document).unbind('mousedown.selectBox');
				jQuery(".selectBox-dropdown-menu").each(function() {
					var options = jQuery(this),
						select = options.data('selectBox-select'),
						control = select.data('selectBox-control'),
						settings = select.data('selectBox-settings');
					if (select.triggerHandler('beforeclose')) return false;
					var dispatchCloseEvent = function() {
						select.triggerHandler('close', {
							_selectBox: true
						});
					};
					if (settings) {
						switch (settings.menuTransition) {
							case 'fade':
								options.fadeOut(settings.menuSpeed, dispatchCloseEvent);
								break;
							case 'slide':
								options.slideUp(settings.menuSpeed, dispatchCloseEvent);
								break;
							default:
								options.hide(settings.menuSpeed, dispatchCloseEvent);
								break;
						}
						if (!settings.menuSpeed) dispatchCloseEvent();
						control.removeClass('selectBox-menuShowing');
					} else {
						jQuery(this).hide();
						jQuery(this).triggerHandler('close', {
							_selectBox: true
						});
						jQuery(this).removeClass('selectBox-menuShowing');
					}
				});
			};
			var selectOption = function(select, li, event) {
				select = jQuery(select);
				li = jQuery(li);
				var control = select.data('selectBox-control'),
					settings = select.data('selectBox-settings');
				if (control.hasClass('selectBox-disabled')) return false;
				if (li.length === 0 || li.hasClass('selectBox-disabled')) return false;
				if (select.attr('multiple')) {
					// If event.shiftKey is true, this will select all options between li and the last li selected
					if (event.shiftKey && control.data('selectBox-last-selected')) {
						li.toggleClass('selectBox-selected');
						var affectedOptions;
						if (li.index() > control.data('selectBox-last-selected').index()) {
							affectedOptions = li.siblings().slice(control.data('selectBox-last-selected').index(), li.index());
						} else {
							affectedOptions = li.siblings().slice(li.index(), control.data('selectBox-last-selected').index());
						}
						affectedOptions = affectedOptions.not('.selectBox-optgroup, .selectBox-disabled');
						if (li.hasClass('selectBox-selected')) {
							affectedOptions.addClass('selectBox-selected');
						} else {
							affectedOptions.removeClass('selectBox-selected');
						}
					} else if ((isMac && event.metaKey) || (!isMac && event.ctrlKey)) {
						li.toggleClass('selectBox-selected');
					} else {
						li.siblings().removeClass('selectBox-selected');
						li.addClass('selectBox-selected');
					}
				} else {
					li.siblings().removeClass('selectBox-selected');
					li.addClass('selectBox-selected');
				}
				if (control.hasClass('selectBox-dropdown')) {
					control.find('.selectBox-label').text(li.text());
				}
				// Update original control's value
				var i = 0,
					selection = [];
				if (select.attr('multiple')) {
					control.find('.selectBox-selected A').each(function() {
						selection[i++] = jQuery(this).attr('rel');
					});
				} else {
					selection = li.find('A').attr('rel');
				}
				// Remember most recently selected item
				control.data('selectBox-last-selected', li);
				// Change callback
				if (select.val() !== selection) {
					select.val(selection);
					setLabel(select);
					select.trigger('change');
				}
				return true;
			};
			var addHover = function(select, li) {
				select = jQuery(select);
				li = jQuery(li);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options');
				options.find('.selectBox-hover').removeClass('selectBox-hover');
				li.addClass('selectBox-hover');
			};
			var removeHover = function(select, li) {
				select = jQuery(select);
				li = jQuery(li);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options');
				options.find('.selectBox-hover').removeClass('selectBox-hover');
			};
			var keepOptionInView = function(select, li, center) {
				if (!li || li.length === 0) return;
				select = jQuery(select);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options'),
					scrollBox = control.hasClass('selectBox-dropdown') ? options : options.parent(),
					top = parseInt(li.offset().top - scrollBox.position().top),
					bottom = parseInt(top + li.outerHeight());
				if (center) {
					scrollBox.scrollTop(li.offset().top - scrollBox.offset().top + scrollBox.scrollTop() - (scrollBox.height() / 2));
				} else {
					if (top < 0) {
						scrollBox.scrollTop(li.offset().top - scrollBox.offset().top + scrollBox.scrollTop());
					}
					if (bottom > scrollBox.height()) {
						scrollBox.scrollTop((li.offset().top + li.outerHeight()) - scrollBox.offset().top + scrollBox.scrollTop() - scrollBox.height());
					}
				}
			};
			var handleKeyDown = function(select, event) {
				//
				// Handles open/close and arrow key functionality
				//
				select = jQuery(select);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options'),
					settings = select.data('selectBox-settings'),
					totalOptions = 0,
					i = 0;
				if (control.hasClass('selectBox-disabled')) return;
				switch (event.keyCode) {
					case 8:
						// backspace
						event.preventDefault();
						typeSearch = '';
						break;
					case 9:
					// tab
					case 27:
						// esc
						hideMenus();
						removeHover(select);
						break;
					case 13:
						// enter
						if (control.hasClass('selectBox-menuShowing')) {
							selectOption(select, options.find('LI.selectBox-hover:first'), event);
							if (control.hasClass('selectBox-dropdown')) hideMenus();
						} else {
							showMenu(select);
						}
						break;
					case 38:
					// up
					case 37:
						// left
						event.preventDefault();
						if (control.hasClass('selectBox-menuShowing')) {
							var prev = options.find('.selectBox-hover').prev('LI');
							totalOptions = options.find('LI:not(.selectBox-optgroup)').length;
							i = 0;
							while (prev.length === 0 || prev.hasClass('selectBox-disabled') || prev.hasClass('selectBox-optgroup')) {
								prev = prev.prev('LI');
								if (prev.length === 0) {
									if (settings.loopOptions) {
										prev = options.find('LI:last');
									} else {
										prev = options.find('LI:first');
									}
								}
								if (++i >= totalOptions) break;
							}
							addHover(select, prev);
							selectOption(select, prev, event);
							keepOptionInView(select, prev);
						} else {
							showMenu(select);
						}
						break;
					case 40:
					// down
					case 39:
						// right
						event.preventDefault();
						if (control.hasClass('selectBox-menuShowing')) {
							var next = options.find('.selectBox-hover').next('LI');
							totalOptions = options.find('LI:not(.selectBox-optgroup)').length;
							i = 0;
							while (next.length === 0 || next.hasClass('selectBox-disabled') || next.hasClass('selectBox-optgroup')) {
								next = next.next('LI');
								if (next.length === 0) {
									if (settings.loopOptions) {
										next = options.find('LI:first');
									} else {
										next = options.find('LI:last');
									}
								}
								if (++i >= totalOptions) break;
							}
							addHover(select, next);
							selectOption(select, next, event);
							keepOptionInView(select, next);
						} else {
							showMenu(select);
						}
						break;
				}
			};
			var handleKeyPress = function(select, event) {
				//
				// Handles type-to-find functionality
				//
				select = jQuery(select);
				var control = select.data('selectBox-control'),
					options = control.data('selectBox-options');
				if (control.hasClass('selectBox-disabled')) return;
				switch (event.keyCode) {
					case 9:
					// tab
					case 27:
					// esc
					case 13:
					// enter
					case 38:
					// up
					case 37:
					// left
					case 40:
					// down
					case 39:
						// right
						// Don't interfere with the keydown event!
						break;
					default:
						// Type to find
						if (!control.hasClass('selectBox-menuShowing')) showMenu(select);
						event.preventDefault();
						clearTimeout(typeTimer);
						typeSearch += String.fromCharCode(event.charCode || event.keyCode);
						options.find('A').each(function() {
							if (jQuery(this).text().substr(0, typeSearch.length).toLowerCase() === typeSearch.toLowerCase()) {
								addHover(select, jQuery(this).parent());
								keepOptionInView(select, jQuery(this).parent());
								return false;
							}
						});
						// Clear after a brief pause
						typeTimer = setTimeout(function() {
							typeSearch = '';
						}, 1000);
						break;
				}
			};
			var enable = function(select) {
				select = jQuery(select);
				select.attr('disabled', false);
				var control = select.data('selectBox-control');
				if (!control) return;
				control.removeClass('selectBox-disabled');
			};
			var disable = function(select) {
				select = jQuery(select);
				select.attr('disabled', true);
				var control = select.data('selectBox-control');
				if (!control) return;
				control.addClass('selectBox-disabled');
			};
			var setValue = function(select, value) {
				select = jQuery(select);
				select.val(value);
				value = select.val(); // IE9's select would be null if it was set with a non-exist options value
				if (value === null) { // So check it here and set it with the first option's value if possible
					value = select.children().first().val();
					select.val(value);
				}
				var control = select.data('selectBox-control');
				if (!control) return;
				var settings = select.data('selectBox-settings'),
					options = control.data('selectBox-options');
				// Update label
				setLabel(select);
				// Update control values
				options.find('.selectBox-selected').removeClass('selectBox-selected');
				options.find('A').each(function() {
					if (typeof(value) === 'object') {
						for (var i = 0; i < value.length; i++) {
							if (jQuery(this).attr('rel') == value[i]) {
								jQuery(this).parent().addClass('selectBox-selected');
							}
						}
					} else {
						if (jQuery(this).attr('rel') == value) {
							jQuery(this).parent().addClass('selectBox-selected');
						}
					}
				});
				if (settings.change) settings.change.call(select);
			};
			var setOptions = function(select, options) {
				select = jQuery(select);
				var control = select.data('selectBox-control'),
					settings = select.data('selectBox-settings');
				switch (typeof(data)) {
					case 'string':
						select.html(data);
						break;
					case 'object':
						select.html('');
						for (var i in data) {
							if (data[i] === null) continue;
							if (typeof(data[i]) === 'object') {
								var optgroup = jQuery('<optgroup label="' + i + '" />');
								for (var j in data[i]) {
									optgroup.append('<option value="' + j + '">' + data[i][j] + '</option>');
								}
								select.append(optgroup);
							} else {
								var option = jQuery('<option value="' + i + '">' + data[i] + '</option>');
								select.append(option);
							}
						}
						break;
				}
				if (!control) return;
				// Remove old options
				control.data('selectBox-options').remove();
				// Generate new options
				var type = control.hasClass('selectBox-dropdown') ? 'dropdown' : 'inline';
				options = getOptions(select, type);
				control.data('selectBox-options', options);
				switch (type) {
					case 'inline':
						control.append(options);
						break;
					case 'dropdown':
						// Update label
						setLabel(select);
						jQuery("BODY").append(options);
						break;
				}
			};
			var disableSelection = function(selector) {
				jQuery(selector).css('MozUserSelect', 'none').bind('selectstart', function(event) {
					event.preventDefault();
				});
			};
			var generateOptions = function(self, options) {
				var li = jQuery('<li />'),
					a = jQuery('<a />');
				li.addClass(self.attr('class'));
				li.data(self.data());
				a.attr('rel', self.val()).text(self.text());
				li.append(a);
				if (self.attr('disabled')) li.addClass('selectBox-disabled');
				if (self.attr('selected')) li.addClass('selectBox-selected');
				options.append(li);
			};
			//
			// Public methods
			//
			switch (method) {
				case 'control':
					return jQuery(this).data('selectBox-control');
				case 'settings':
					if (!data) return jQuery(this).data('selectBox-settings');
					jQuery(this).each(function() {
						jQuery(this).data('selectBox-settings', jQuery.extend(true, jQuery(this).data('selectBox-settings'), data));
					});
					break;
				case 'options':
					// Getter
					if (data === undefined) return jQuery(this).data('selectBox-control').data('selectBox-options');
					// Setter
					jQuery(this).each(function() {
						setOptions(this, data);
					});
					break;
				case 'value':
					// Empty string is a valid value
					if (data === undefined) return jQuery(this).val();
					jQuery(this).each(function() {
						setValue(this, data);
					});
					break;
				case 'refresh':
					jQuery(this).each(function() {
						refresh(this);
					});
					break;
				case 'enable':
					jQuery(this).each(function() {
						enable(this);
					});
					break;
				case 'disable':
					jQuery(this).each(function() {
						disable(this);
					});
					break;
				case 'destroy':
					jQuery(this).each(function() {
						destroy(this);
					});
					break;
				default:
					jQuery(this).each(function() {
						init(this, method);
					});
					break;
			}
			return jQuery(this);
		}
	});
})(jQuery);
