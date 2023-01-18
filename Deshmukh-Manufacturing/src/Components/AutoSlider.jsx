import React from 'react'
import "./AutoSlider.css"
const AutoSlider = () => {
  return (
    <div className='slider'>
        <div className='slider-track'>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="data:image/png;base64,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" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACCCAMAAADovAORAAAAgVBMVEX///8AcuEAbeAAcOEAaN8Aa+D3+v4tgOMAY947iOUAZt+Nse0AXt77/f+yy/MAYd6/0/WBpuoAW97w9f3L3Pfl7vvV4vgrfePa5/qsx/LH2PZwnOmWuvBJjeakvvBkludDhORroesueOJ8oOlYk+iNrOyhwvGArO1mkudemumbtu5TyCCmAAAFm0lEQVR4nO2aa3OyPBCGIQfEcNTIQQRBtB76/3/gC2JJImLpTN8tz0zuL51qGC+WzW52F8PQ0tLS0tLS0tLS0tLS0tLS0tL6F+Wl51tRJYvicE7/4Nc3Ya/Nt6v55kBdm1KMMaLMRasNB2CUZJlu8JCbfLfYLxkxJWFi70IPAvNL1gL3P758vzQ6YWo+i+IygiG9azpuWKMB7B0Yfe9Ev6bJuFv0mra5DvlQtJNxQzxGa5qozmaGa43atuO15oV7I29oTZPcZoXrYxmOkkZqkGBA220SrrWT4BArnf3eKZWohsoZ4W5qYV222PA2M/D4ZAtcXMOYdxLunglHKEXaXUkOTfazweVl/9xxJeUw2UfoDuT0MAU3Er7AlIywSfov0BIkF0/CDfolRP1GmBeb8f/OakzDjd3+kT/F11wkD5hQNgU363FZrn4TiohhzxDXftr/IZohrnAG5qjfSNluPs4gthoq1G+cOW41KZDZSqljlb0zzCiQcRGv1L0W9q5g0iPIGXJaEu5PB7iWnjmvxE4j+djFvyoV13shQznioKTfUjwRORgnIK4r45pJ7gwVGurhANE85pbF420tnyp3ILQKLmZkoODYrgrl0ofV5fFYJkz5DMa4Cu4r0dV92Uk+i2NEKVUuYwcY2qm4Hn1XWtIEqpUzEdfIzHeFO5ArTMc1/JEmTkNrhlC003GNDR12yFoRqG32M9xmvyE6WEwx1C77Ma4RlqYSvhAzd3CO8GNcg2cfFQsIRQhRFrClk0F1m75wzbW7VuR2evxdH9X1Hk/9y225XN4ufspBW9EdbxRF/C7Lsh5nBEMcF+atFj76rmNg8XYRsBsMKcJ8tTsVxalc5ZtRy6bnj13ZrCqPH9s/GP18KVolZnMUQO0uoqiu8pfW86sad4uaVbhebqEx7/KiYq3GVGzT7TMwP9NAjSMooGfgUVXLkaNhxsLuSi2/NkUwDHrYPgFOUu6KTsNs1YqcZF6/HknCNdwkpRVPxjr5tBBPevv6lloDI0gPlgvEZ7HT1yrfHV3UVCGAk6rL62fcyX2AiM7IKyEMFtIyJD1kTAI3CCTfoHXnvtd399R6ORCtV0ggDF+yNMoO9sM9mmjWTajVyU9zvGEEKR8RoEFgthamNfNHLkvv94Bode7+57JxaX11/DAvE2Xyc4U5YIgSF1NxdG1DG6v6DJBJYLR8GDJdKZMfEPNawkRMDkfROtmKoCtPfg59bPNy8bFJPiFwsx6X7pScG0v/KZMf6XNLmlTBTH6kBm3nCl7oD8RN0TBVMm4sNdgqiFjWN7++fo4vXFtVQHifIrA5cjlQO/r6ldHQtXvKVvGc4/AiEpOfp7IXePLjCdxHC3GIi4p0NpMfCdcbwaUHgWuf1cszYNxSOAMfwWV5NGXyQyBwD/1WW8QjuEEmzjf0aR7g9IsxSFvvLOLudgSXRVxMqgMlOPMr8OQn7gM96kb/vLLvXXNTcHDrIG7qIl+9FbdGVyCFvDhYsTuJlX80cvb98IQ5nrGVsq3UE4sTCRfm9YuDsKO8j7YiXYXq5KfueeM/mPxEUlFDi7iLZqk4JNxfZvGOEhgtU8NrSv2L/CIcAmqbege5dnATJz87S1eaS9134MY05VUkWWBXqUcpVPUT13JZgAhjcgsXFd0OujAZril+1bI4cL75ld9T/q4MWz+sZr14F1aIVICtnN34C4N2f2RP37yySYH22UMled3xwOhTVGBxMmZfUoHStq2GV6ZDdC+H/vj0utdgX6H7pp5fs2cKbOOnJi937KHbEJbDtyAN70KptNsxQtgZYqQ39LSK3v6oJc3z66KxVXNcYMSsriNt28i5LjB7rFpcHcjX5J/kxf7+03Gcz334xmRWv8qP/37WMm3e8y9MhbS0tLS0tLS0tLS0tLS0tLS0tGav/wDs4VZ0HWwgCwAAAABJRU5ErkJggg==" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
            <div className='slide'>
                <img src="http://htcarb.com/assets/img/DSinsert.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default AutoSlider