'use strict'

const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')
const util = require('util')
const htmlString = require('./randData')

const writeFile = util.promisify(fs.writeFile)
const unlinkFile = util.promisify(fs.unlink)

;(async () => {
  try {
    const htmlStr = htmlString()

    // generate html file
    await writeFile(path.join(__dirname, 'random.html'), htmlStr)

    // generate pdf
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(path.join(__dirname, 'random.html'), { waitUntil: 'networkidle2' })
    await page.pdf({path: path.join(__dirname, 'random.pdf'), format: 'A4'})

    // delete html
    await unlinkFile(path.join(__dirname, 'random.html'))

    await browser.close()
    console.log('PDF generado')
  } catch (error) {
    console.log(error)
  }
})()
