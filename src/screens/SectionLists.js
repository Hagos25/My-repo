
import { SectionList, Text, View, StyleSheet } from 'react-native';

const SectionLists=()=>{
    const ListData=[
        { title:' Students',
            data:['abebe','Kebede', 'Efarm','Temesgen','Gebremedhin']
},
{ 
    title:'Techar',
    data:['kbrom','sisay','Eframe','Halftom']

}

]
const renderItem = ({ item }) => {
  
    return <Text style={styles.item}>{item}</Text>; 
   

};


const renderSectionHeader = ({ section: { title } }) => {
    return <Text style={styles.header}>{title}</Text>; 
};

return(
    <View style={styles.bord}>
        <SectionList
        sections={ListData} 
        keyExtractor={(item, index) => `${item}-${index}`} 
        renderItem={renderItem} 
        renderSectionHeader={renderSectionHeader}
        />    
          </View>
    )

}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: 20 },
    header: { fontSize: 20, fontWeight: 'bold', backgroundColor: 'blue', padding: 10 },
    item: { fontSize: 16, padding: 10, color:'black',
    },
    bord:{
borderStyle: 'solid'
    }
});


 
 export default SectionLists;