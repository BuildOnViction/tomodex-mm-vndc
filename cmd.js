'use strict'

const commander = require('commander')
const spot = require('./commands/spot')
const lend = require('./commands/lend')

commander
    .version('1.0.0')
    .description('TomoDEX Market Marker')

commander
    .command('spot <pair>')
    .action(async (pair) => {
        await spot.run(pair)
    })

commander
    .command('lend <pair>')
    .action(async (pair) => {
        await lend.run(pair)
    })

commander.parse(process.argv)
