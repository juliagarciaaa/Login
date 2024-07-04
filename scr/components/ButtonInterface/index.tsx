import { TouchableOpacityProps, TouchableOpacity, Text  } from "react-native";
import { styles } from './styles'
export interface IBInterface extends TouchableOpacityProps {
    onPressI: () => void
    tittle: string
    type: 'primary' | 'secondary' | 'third'
}
export function ButtonInterface({onPressI, tittle, type, ...rest }: IBInterface){
    return (
        <TouchableOpacity style={
            type == "primary" ? styles.buttonPrimary:
                type == "primary" ? styles.buttonSecondary:
                styles.buttonThird
        }
         onPress = {onPressI}
         {...rest}
       >
         <Text style={styles.text}>{tittle}</Text>
        </TouchableOpacity>
    )
}