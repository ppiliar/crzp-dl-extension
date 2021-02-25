
(function () {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
    return;
    }
    window.hasRun = true;

    /**
     * Check if download link exists
     * If it exists do nothing.
     */
    var existingLink = document.getElementById("anchDwn");
    if(existingLink.nodeName && existingLink.nodeName.toLowerCase() === 'a') {
        return;
    }

    /**
     * Add download link as first element to corresponding div
     */
    let div = document.getElementsByClassName("well-sm group text-right");
    var downloadLink = document.createElement('template');
    downloadLink.innerHTML = `<a id="anchDwn" class="btn btn-default btn-m" tabindex="0" title="Stiahnuť" onclick="javascript: ;downloadFile('anchDwn','OpenFile');"><i class="fa fa-file-pdf-o" title="Stiahnuť">&nbsp;</i><span title="Stiahnuť">Stiahnuť</span></a>`;
    div[0].insertBefore(downloadLink.content.firstChild, div[0].firstChild);
})();


