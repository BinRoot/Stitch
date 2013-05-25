var imgClickedURL = "http://localhost:5000/login";

var img1 = "/img/img9.jpg";
var txt1 = "";

var img2 = "/img/img8.jpg";
var txt2 = "";

var img3 = "/img/img3.jpg";
var txt3 = "";

var img4 = "/img/img4.jpg";
var txt4 = "";

var img5 = "/img/img5.jpg";
var txt5 = "";

var img6 = "/img/img6.jpg";
var txt6 = "";

var img7 = "/img/img7.jpg";
var txt7 = "";

var img8 = "/img/img2.jpg";
var txt8 = "";

var img9 = "/img/img1.jpg";
var txt9 = "";

jQuery(function($){
    
    $.supersized({
	
	// Functionality
	slideshow               :   1,// Slideshow on/off
	autoplay:1,// Slideshow starts playing automatically
	start_slide             :   1,// Start slide (0 is random)
	stop_loop:0,// Pauses slideshow on last slide
	random: 0,// Randomize slide order (Ignores start slide)
	slide_interval          :   10000,// Length between transitions
	transition              :   6, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed:4000,// Speed of transition
	new_window:0,// Image links open in new window/tab
	pause_hover             :   0,// Pause slideshow on hover
	keyboard_nav            :   1,// Keyboard navigation on/off
	performance:1,// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
	image_protect:1,// Disables image dragging and right click with Javascript
	
	// Size & Position   
	min_width        :   0,// Min width allowed (in pixels)
	min_height        :   0,// Min height allowed (in pixels)
	vertical_center         :   1,// Vertically center background
	horizontal_center       :   1,// Horizontally center background
	fit_always:0,// Image will never exceed browser width or height (Ignores min. dimensions)
	fit_portrait         :   1,// Portrait images will not exceed browser height
	fit_landscape:   0,// Landscape images will not exceed browser width
	
	// Components
	slide_links:'blank',// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	thumb_links:1,// Individual thumb links for each slide
	thumbnail_navigation    :   0,// Thumbnail navigation
	slides :  [// Slideshow Images
	    {image : img1, title : txt1, thumb : '', url : null},
	    {image : img2, title : txt2, thumb : '', url : null},  
	    {image : img3, title : txt3, thumb : '', url : null},
	    {image : img4, title : txt4, thumb : '', url : null},
	    {image : img5, title : txt5, thumb : '', url : null},
	    {image : img6, title : txt6, thumb : '', url : null},
	    {image : img7, title : txt7, thumb : '', url : null},
	    {image : img8, title : txt8, thumb : '', url : null},
	    {image : img9, title : txt9, thumb : '', url : null}
	],
	
	// Theme Options   
	progress_bar:1,// Timer for each slide
	mouse_scrub:0
	
    });
});
