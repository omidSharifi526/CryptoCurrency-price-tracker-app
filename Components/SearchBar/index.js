import React from 'react'
import styles from './searchBar.module.css';

const SearchBar = ({...rest}) => {
    return (
        <div>
              <div className={styles.coin_search}>
                <input className={styles.coin_input} {...rest} />
              </div>
        </div>
    )
}

export default SearchBar
