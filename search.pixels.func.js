const autoIncPointElem = document.getElementById('autoIncPoint');

let currY = 0;
let currX = 0;
let currPixelIdx = 0;

const goToNextPoint = () => {
    if (currX >= width-1) {
        currX = 0;
        currY++;
        if (currY >= height) {
            currY = 0;
            return false;
        }
        return true;
    } else {
        currX++;
        return true;
    }
}

const isCurrentPixelBlack = () => {
    currPixelIdx = (currX + currY * width) * 4;
    if (pixels[currPixelIdx] != 255) return true;
    else return false;
}

const doChangeCurrX = (obj) => {
    currX = parseInt(obj.value);
}

const doChangeCurrY = (obj) => {
    currY = parseInt(obj.value);
}

const doFastPixelLocSearch = () => {
    currX = 0;
    currY = 0;
    let foundBlackPoint = false;
    let topBlackX = -1;
    let topBlackY = -1;
    let bottomBlackX = -1;
    let bottomBlackY = -1;
    let leftBlackX = -1;
    let leftBlackY = -1;
    let rightBlackX = -1;
    let rightBlackY = -1;
    showMessages('info','Fast Pixel Check..');
    loadPixels();
    while ( 1 === 1) {
        if (isCurrentPixelBlack()) {
            foundBlackPoint = true;
            if (topBlackX < 0) {
                topBlackX = currX;
                topBlackY = currY;
                bottomBlackX = currX;
                bottomBlackY = currY;
                leftBlackX = currX;
                leftBlackY = currY;
                rightBlackX = currX;
                rightBlackY = currY;
            }
            if (bottomBlackX < currX || bottomBlackY < currY) {
                bottomBlackX = currX;
                bottomBlackY = currY;
            }
            if (leftBlackX > currX) {
                leftBlackX = currX;
                leftBlackY = currY;
            }
            if (rightBlackX < currX) {
                rightBlackX = currX;
                rightBlackY = currY;
            }
        }
        if (!goToNextPoint()) {
            break;
        }
    }
    if (foundBlackPoint) {
        fill(255, 0, 0);
        rect(topBlackX - 3, topBlackY - 3, 6, 6);
        rect(bottomBlackX - 3, bottomBlackY - 3, 6, 6);
        rect(leftBlackX - 3, leftBlackY - 3, 6, 6);
        rect(rightBlackX - 3, rightBlackY - 3, 6, 6);
    }
    showMessages('info','Fast Pixel Done');
}