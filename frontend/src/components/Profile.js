import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


import {useGet} from '../hooks/useGet'

export function Profile({}) {
    const user = useGet('user/')
    return(
        <View>
             <Text>{user.email}</Text>
             <Text>{user.patient_profile?.bio}</Text>
             <Text>{user.patient_profile?.age}</Text>
             <Text>{user?.patient_profile?.first_name}</Text>
             <Text>{user?.patient_profile?.last_name}</Text>
        </View>

    )
}