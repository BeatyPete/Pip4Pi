const dayjs = require('dayjs')

const getTime = () => {
    return dayjs().format('h:mm A')
}

const getDate = () => {
    return dayjs().add(200, 'year').format('M.D.YYYY')
}

export {getTime, getDate}