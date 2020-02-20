import React from 'react'

import Button from '../../components/button/Button'

import footerStyle from './assets/Footer.module.scss'

const Footer = () => (
  <footer className={footerStyle.footer}>
    <div className={footerStyle.group}>
      <Button
        href="link"
        target="_blank"
        primary
      >
        <span>Become a citizen</span>
      </Button>
    </div>
    <div className={footerStyle.group}>
      <Button
        href="link"
        target="_blank"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 48 48">
          <path d="m20.029615,4.868318c-0.277296,0.536175 -3.649775,10.556048 -3.599972,10.695889c0.049572,0.139502 8.161789,-7.785691 9.892422,-9.664355l1.327257,-1.440829l-3.704119,0l-3.704006,0l-0.211582,0.409295m1.915955,6.167955c-5.751614,5.719552 -6.051197,6.043235 -6.408648,6.923787c-0.611325,1.505636 -1.450607,4.132172 -1.352034,4.230743c0.161102,0.16099 14.718916,-14.502673 14.710955,-14.817831c-0.011253,-0.446017 -0.621099,-2.247481 -0.776749,-2.294437c-0.076971,-0.023194 -2.85494,2.6578 -6.173525,5.957738m4.944508,1.345328c-2.525917,2.540014 -2.646887,2.686794 -2.576395,3.12701c0.114489,0.71604 0.226814,0.634863 3.092102,-2.233383c2.563211,-2.565936 2.685997,-2.713736 2.55673,-3.079486c-0.227386,-0.64339 -0.33448,-0.567215 -3.072437,2.185859m1.021074,3.182722l-2.768423,2.706688l0.394512,1.514391c0.217039,0.832914 1.545656,5.575386 2.95261,10.538769c1.406952,4.963388 2.773424,9.791803 3.036623,10.729776c0.263203,0.937965 0.546406,1.881264 0.629406,2.096268l0.150864,0.390762l4.409134,0c2.425072,0 4.409122,-0.055031 4.409122,-0.122223c0,-0.067184 -2.302277,-6.949257 -5.116184,-15.293407c-2.8139,-8.344269 -5.116179,-15.196085 -5.116179,-15.226442c0,-0.205783 -0.525263,0.263882 -2.981485,2.665419m-10.060352,5.849504c-5.343224,5.353003 -5.847906,5.949438 -5.856546,6.920034c-0.003866,0.445221 10.352766,-9.81443 10.826302,-10.724998c0.369953,-0.711378 0.550608,-1.330776 0.41293,-1.415932c-0.058327,-0.036039 -2.480555,2.313311 -5.382685,5.220896m-1.91242,6.111221l-5.503426,5.42827l-0.583586,1.634342c-0.857018,2.399597 -2.976368,8.687614 -2.976368,8.830414c0,0.067642 1.936986,0.122902 4.304417,0.122902l4.3043,0l0.224428,-0.817116c0.12347,-0.449532 1.250513,-4.3666 2.504543,-8.704666c2.863926,-9.906641 3.429438,-11.939699 3.318129,-11.930035c-0.048885,0.004208 -2.565481,2.45031 -5.592438,5.435888" />
        </svg>
      </Button>
      <Button
        href="link"
        target="_blank"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 48 48">
          <path d="M40 12s-4.586-3.59-10-4l-.488.977C34.406 10.176 36.652 11.89 39 14c-4.047-2.066-8.04-4-15-4-6.96 0-10.953 1.934-15 4 2.348-2.11 5.02-4.016 9.488-5.023L18 8c-5.68.535-10 4-10 4s-5.121 7.426-6 22c5.16 5.953 13 6 13 6l1.64-2.184C13.856 36.848 10.716 35.121 8 32c3.238 2.45 8.125 5 16 5s12.762-2.55 16-5c-2.715 3.121-5.855 4.848-8.64 5.816L33 40s7.84-.047 13-6c-.879-14.574-6-22-6-22zM17.5 30c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4zm13 0c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4z" />
        </svg>
      </Button>
      <Button
        href="link"
        target="_blank"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24">
          <path d="M9.309 2s-1.732 0-3.366.287c-1.157.205-1.174.727-1.302 1.17l-1.024 4.8A2.766 2.766 0 0 0 2 10.77a2.769 2.769 0 0 0 2.77 2.767 2.76 2.76 0 0 0 2.76-2.767A2.76 2.76 0 0 0 6 8.3V3.347C6.395 3.25 7.592 3 9.309 3h.384c5.962 0 10.77 3.902 10.77 9s-4.823 9-10.77 9H9.31c-1.503 0-2.823-.229-4.135-.674l-.625.569c1.97 1.202 5.142 1.097 5.142 1.097h.336c.36 0 .724-.02 1.092-.064C17.243 21.352 22 17.13 22 12 22 6.477 16.616 2 9.309 2zM7 4.443v3.309c.307.229.618.482.875.766.34.375.62.785.875 1.226.674 1.165.941 2.582.941 3.64 0 3.053-1.058 4.579-1.834 5.423 2.351.43 3.078.06 3.278-.272.09-.157.095-.316.095-.476 0-.572-.404-1.11.278-1.522.098-.175-.149-.265-.22-.4-.146-.32.346-.376.384-.645-.15-.316-.317-.625-.21-.996.202-.493.777-.304 1.14-.572.13-.106.207-.31.146-.473-.574-.856-1.133-1.689-1.764-2.625-.017-.025-.04-.113-.04-.113-.097-.474.443-.703.468-1.152-.02-.528-.292-1.406-.726-2.338-.124-.266-.47-.998-.96-1.502C9.175 5.15 8.246 4.443 7 4.443zm3.854.121c.084.098.16.193.222.282.254.362.493.756.71 1.164.43.815.77 1.68.96 2.443.095.382.152.74.164 1.05l.004.071-.004.072a2.115 2.115 0 0 1-.28.938c.406.603 1.46 2.176 1.46 2.176s.226.337.226.797c0 .88-.475 1.29-.771 1.535a2.52 2.52 0 0 1-.33.213l-.059.402a1.74 1.74 0 0 1-.144.49c.007.044.033.217.002.44-.052.377-.332.879-.332.879.027.157.048.34.048.543 0 .08-.023.363-.023.363l.111-.033c2.253-.763 4.699-2.414 5.479-4.596a5.929 5.929 0 0 0 .357-1.969c.001-.955-.215-1.744-.33-2.047-1.05-2.78-3.782-4.855-7.47-5.213zM4.77 9.25c.832 0 1.51.683 1.51 1.52s-.678 1.517-1.51 1.517a1.518 1.518 0 0 1 0-3.037z" />
        </svg>
      </Button>
    </div>
  </footer>
)

export default Footer
