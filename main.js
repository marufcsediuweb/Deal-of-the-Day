$(function() {
        var productId = "3423878"; //TODO: your product ID goes here
        var caption = "Deal of the Day!"; //TODO: change this text to whatever you like
        $('.elOrderProductOptinProductName input[value="'+productId+'"]').siblings('label').append('<br/><span class="top-product-label">'+caption+'</span><br />');
        $('.elOrderProductOptinProductName input[value="'+productId+'"]').parent().addClass('custom-top-product');
    });
