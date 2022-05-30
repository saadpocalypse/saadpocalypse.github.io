function goTo(location){
    window.open(location);
}

function download(url) {
    const file = document.createElement('a')
    file.href = url
    file.download = url.split('/').pop()
    document.body.appendChild(file)
    file.click()
    document.body.removeChild(file)
}

