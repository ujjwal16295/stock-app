import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export const Spinner = (props) => {
  return (
    <div>
        <ClipLoader
        loading={props.loading}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
