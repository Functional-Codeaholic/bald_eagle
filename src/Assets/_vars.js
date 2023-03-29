const siteName = "Bald Eagle Construction";
const siteOwner = "Functional Codeaholic";
const siteUrl = "https://BaldEagle.wordpress.com";
const contactPhone = "tel:801-555-5555";
const contactEmail = "mailto:none@noemail.com";

// set the break points for mobile thru 4k screens for use in js/react
const mobileMin = 0;
const tabletMin = 768;
const standardMin = 1024;
const hd1080Min = 1920;
const hd4kMin = 3840;

/**
 * use
 * const {siteOwner, siteUrl} = require('../../../assets/_vars');
 * to include any of these vars
 */


let screenWidth = Number(window.innerWidth);
let Device = "";

switch (true) {
    case screenWidth < 768:
        // set number of responses for Mobile
        Device = "Mobile";
        break;
    case screenWidth < 1024:
        // set number of responses for Tablets and Small Laptops
        Device = "Tablet";
        break;
    case screenWidth < 1920:
        // set number of responses for SD Displays up to 1080p
        Device = "SD";
        break;
    case screenWidth < 3840:
        // set number of responses for Displays between 1080p and 4k
        Device = "HD1080";
        break;
    default:
        // set number of responses for 4k and bigger Displays
        Device = "HD4K";
        break;
}



export { Device, siteName, siteUrl, siteOwner, contactPhone, contactEmail, mobileMin, tabletMin, standardMin, hd1080Min, hd4kMin };