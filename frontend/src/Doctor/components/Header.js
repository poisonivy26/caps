import React from 'react';

import { Text, StyleSheet } from 'react-native'
export function Header(header) {

    return(
        <Text style={styles.header}>
                {header}
        </Text>
    )

}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        color: 'blue'
    }
})

