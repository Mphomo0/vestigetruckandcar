import AON from '../public/images/insurancelogos/AON.png'
import Bryte from '../public/images/insurancelogos/bryte.png'
import Hollard from '../public/images/insurancelogos/Hollard.png'
import IWyze from '../public/images/insurancelogos/iwyse.webp'
import KingPrice from '../public/images/insurancelogos/King-Price.png'
import OUTsurance from '../public/images/insurancelogos/OUTsurance.png'
import Renasa from '../public/images/insurancelogos/renasa.webp'
import Santam from '../public/images/insurancelogos/Santam.png'

const insuranceBrands = (brand) => {
  switch (brand) {
    case 'AON':
      return AON
    case 'Bryte':
      return Bryte
    case 'Hollard':
      return Hollard
    case 'iWyze':
      return IWyze
    case 'King Price':
      return KingPrice
    case 'OUTsurance':
      return OUTsurance
    case 'Renasa':
      return Renasa
    case 'Santam':
      return Santam
    default:
      return null
  }
}

export default insuranceBrands
