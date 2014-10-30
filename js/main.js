/*global analytics */

$(function () {

    var linkTrack = function ($el, eventName, properties) {
        $el.click(function (event) {
            analytics.track(eventName, properties);
            if (event.metaKey !== true && event.ctrlKey !== true && event.which !== 2) {
                event.preventDefault();
                var href = $el.attr('href');
                if (href) setTimeout(function () { window.location = href; }, 100);
            }
        });
    };

    // ### Navigation

    linkTrack($('.home-link'),    'Clicked Home Link');
    linkTrack($('.avatar-link'),  'Clicked Avatar Link');

    // ### Header Icons

    linkTrack($('.dribbble-icon'), 'Clicked Dribbble Icon');
    linkTrack($('.github-icon'),   'Clicked Github Icon');
    linkTrack($('.twitter-icon'),  'Clicked Twitter Icon');
    linkTrack($('.rss-icon'),      'Clicked RSS Icon');

    // ### Follow Buttons

    linkTrack($('.twitter-follow-button'), 'Clicked Twitter Follow Button');

    // ### Share Buttons

    linkTrack($('.twitter-share-button'), 'Clicked Twitter Share Button');
    linkTrack($('.hn-share-button'),      'Clicked HN Share Button');

    // ### Share Links

    linkTrack($('.twitter-share-link'), 'Clicked Twitter Share Link');
    linkTrack($('.hn-share-link'),      'Clicked HN Share Link');

});