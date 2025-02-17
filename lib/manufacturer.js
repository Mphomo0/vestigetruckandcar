import Mercedes from '../public/images/manufacturer/Mercedes-Benz-.png'
import Daewoo from '../public/images/manufacturer/daewoo.png'
import Fuso from '../public/images/manufacturer/fuso.webp'
import Man from '../public/images/manufacturer/MAN-logo.png'
import Scania from '../public/images/manufacturer/Scania-Logo.png'
import Freightliner from '../public/images/manufacturer/freightliner.png'
import Tata from '../public/images/manufacturer/Tata-Logo.png'
import UDTrucks from '../public/images/manufacturer/UD-Trucks-Logo.png'
import WesternStar from '../public/images/manufacturer/Western_Star.png'

const manufacturerBrands = (brand) => {
  switch (brand) {
    case 'Fuso':
      return Fuso
    case 'UDTrucks':
      return UDTrucks
    case 'Tata':
      return Tata
    case 'WesternStar':
      return WesternStar
    case 'Mercedes':
      return Mercedes
    case 'Daewoo':
      return Daewoo
    case 'Man':
      return Man
    case 'Scania':
      return Scania
    case 'Freightliner':
      return Freightliner
  }
}

export default manufacturerBrands
