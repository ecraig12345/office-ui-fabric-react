import * as React from 'react'
import { TeamsProcessedSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M16 24a7.853 7.853 0 0 1-2.129-.285 8.067 8.067 0 0 1-1.91-.8 7.985 7.985 0 0 1-2.871-2.876 8.064 8.064 0 0 1-.8-1.914 8.06 8.06 0 0 1 0-4.25 8.081 8.081 0 0 1 .8-1.914 7.985 7.985 0 0 1 2.871-2.871 8.125 8.125 0 0 1 1.914-.8 8.059 8.059 0 0 1 4.25 0 8.125 8.125 0 0 1 1.914.8 7.985 7.985 0 0 1 2.871 2.871 8.061 8.061 0 0 1 .8 1.914 8.075 8.075 0 0 1 0 4.254 8.067 8.067 0 0 1-.8 1.91 7.985 7.985 0 0 1-2.871 2.871 8.044 8.044 0 0 1-1.914.8A7.86 7.86 0 0 1 16 24zm0-15a6.886 6.886 0 0 0-1.855.25 6.995 6.995 0 0 0-3.09 1.8 7.084 7.084 0 0 0-1.1 1.418 7.011 7.011 0 0 0-.707 1.672 7.011 7.011 0 0 0 0 3.711 7.029 7.029 0 0 0 4.895 4.895 7.009 7.009 0 0 0 3.71 0 7.029 7.029 0 0 0 4.895-4.895 7.011 7.011 0 0 0 0-3.711 6.991 6.991 0 0 0-.707-1.672 7.029 7.029 0 0 0-4.186-3.218A6.88 6.88 0 0 0 16 9zm0 7v-5h-1v6h4v-1h-3z" />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
