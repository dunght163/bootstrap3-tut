/**
 * Created by dunght163 on 7/30/15.
 */
$('#btnPrev').click(function () {
    $('.pagination > .active').prev('li').find('a').trigger('click');
    scrollToTabContent();
});

$('#btnNext').click(function () {
    $('.pagination > .active').next('li').find('a').trigger('click');
    scrollToTabContent();
});

$('#btnPage1').click(scrollToTabContent);

$('#btnPage2').click(scrollToTabContent);

$('#btnPage3').click(scrollToTabContent);

$('#btnGoTop').click(scrollToTop);

function scrollToMy(element, offset) {
    var tabPaneOffset = $(element).offset();
    scrollTo(tabPaneOffset.left, tabPaneOffset.top - offset);
}

function scrollToTabContent() {
    scrollToMy('.tab-content', 170);
}

function scrollToTop() {
    scrollToMy('.jumbotron', 0);
}