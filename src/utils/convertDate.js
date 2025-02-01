import jMoment from 'jalali-moment'

export const convertDateToLalali = (date)=>{
    return jMoment(date).format('jYYYY/jMM/jDD')
}