'use strict'
document.addEventListener('DOMContentLoaded',
()=>void $('a[href^="https:"],a[href^="http:"]')
.prop('rel','noopener noreferrer'))