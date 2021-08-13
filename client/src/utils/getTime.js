const dayjs = require('dayjs')

const getTime = () => {
    return dayjs().format('h:mm A')
}

const getDate = () => {
    return dayjs().format('M.D.YYYY')
}

export {getTime, getDate}