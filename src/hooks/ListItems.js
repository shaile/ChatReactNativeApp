import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import SearchComponent from '../components/common/SearchComponent';


const ListItems = () => {
    const [term, setTerm] = useState('');
    const list = [
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d722s',
            title: 'Laddu',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
		{
            id: '58694a0f-3da1-471f-bd96-145571e29d722sw',
            title: 'Guddu',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d722swa',
            title: 'Third Item',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d722s2',
            title: 'Third Item',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
		{
            id: '58694a0f-3da1-471f-bd96-145571e29d722sw22',
            title: 'Third Item',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d722swa22',
            title: 'Third Item',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d722s',
            title: 'Third Item',
            avatar_url: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-55892,resizemode-1,msid-61717490/alia-bhatt-buys-stake-in-startup-stylecracker.jpg',
        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d722s',
            title: 'Third Item',
            avatar_url: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-55892,resizemode-1,msid-61717490/alia-bhatt-buys-stake-in-startup-stylecracker.jpg',
        },
		{
            id: '58694a0f-3da1-471f-bd96-145571e29d722sw',
            title: 'Third Item',
            avatar_url: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/14/801743-alia-bhatt-rrr-crop.jpg',
        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d722s',
            title: 'Third Item',
            avatar_url: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-55892,resizemode-1,msid-61717490/alia-bhatt-buys-stake-in-startup-stylecracker.jpg',
        },
		{
            id: '58694a0f-3da1-471f-bd96-145571e29d722sw',
            title: 'Third Item',
            avatar_url: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/14/801743-alia-bhatt-rrr-crop.jpg',
        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d722s',
            title: 'Third Item',
            avatar_url: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-55892,resizemode-1,msid-61717490/alia-bhatt-buys-stake-in-startup-stylecracker.jpg',
        },
		{
            id: '58694a0f-3da1-471f-bd96-145571e29d722sw',
            title: 'Third Item',
            avatar_url: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/14/801743-alia-bhatt-rrr-crop.jpg',
        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d722s',
            title: 'Third Item',
            avatar_url: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-55892,resizemode-1,msid-61717490/alia-bhatt-buys-stake-in-startup-stylecracker.jpg',
        },
		{
            id: '58694a0f-3da1-471f-bd96-145571e29d722sw',
            title: 'Third Item',
            avatar_url: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/14/801743-alia-bhatt-rrr-crop.jpg',
        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d722s',
            title: 'Third Item',
            avatar_url: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-55892,resizemode-1,msid-61717490/alia-bhatt-buys-stake-in-startup-stylecracker.jpg',
        },
		{
            id: '58694a0f-3da1-471f-bd96-145571e29d722sw',
            title: 'Third Item',
            avatar_url: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/14/801743-alia-bhatt-rrr-crop.jpg',
        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d722s',
            title: 'Third Item',
            avatar_url: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-55892,resizemode-1,msid-61717490/alia-bhatt-buys-stake-in-startup-stylecracker.jpg',
        },
		{
            id: '58694a0f-3da1-471f-bd96-145571e29d722sw',
            title: 'Third Item',
            avatar_url: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/14/801743-alia-bhatt-rrr-crop.jpg',
        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d722s',
            title: 'Third Item',
            avatar_url: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-55892,resizemode-1,msid-61717490/alia-bhatt-buys-stake-in-startup-stylecracker.jpg',
        },
		{
            id: '58694a0f-3da1-471f-bd96-145571e29d722sw',
            title: 'Third Item',
            avatar_url: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/14/801743-alia-bhatt-rrr-crop.jpg',
        }
      ];
      
      const filterResultsByTerm = (serchText) => {
        return list.filter((result) => {
            return result.title === serchText
        });
    }
      keyExtractor = (item, index) => index.toString()
      renderItem = ({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.title}
          leftAvatar={{ source: { uri: item.avatar_url } }}
          bottomDivider
          chevron
        />
      )
    return (
            <>   
            <Text>{term}</Text>         
            <SearchComponent
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}//newTerm => setTerm(newTerm)
            />
            <FlatList
                keyExtractor={this.keyExtractor}
                data={(term)?filterResultsByTerm(term):list}
                renderItem={this.renderItem}
        />
        </>
    );
}

export default ListItems;