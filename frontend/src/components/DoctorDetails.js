import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


import {useGet} from '../hooks/useGet'

export function DoctorProfile({}) {
    const doctor_user = useGet('doctor_user/')
    return(
        <View>
             <Text>{doctor_user.email}</Text>
             <Text>{doctor_user?.doctor_profile?.bio}</Text>
             <Text>{doctor_user?.doctor_profile?.age}</Text>
             <Text>{doctor_user?.doctor_profile?.first_name}</Text>
             <Text>{doctor_user?.doctor_profile?.last_name}</Text>
             <Text>{doctor_user?.doctor_profile?.specialization}</Text>
             <Text>{doctor_user?.doctor_profile?.education}</Text>
        </View>

    )
}