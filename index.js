import {upload} from './utils/img.js'
import {ocr} from './utils/ocr.js'
import {v4} from './web_modules/uuid.js'

document.addEventListener('paste', upload)
document.getElementById('img').addEventListener('load', ocr)
// alert(uuid())
