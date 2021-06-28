import { useState} from 'react'
import './css/periodic-table.css'
import elements from './elements.json'
export default function Periodic() 
{
    const [data,setData]=useState(elements[0]);
    const [open,setOpen]=useState(false);
    function getSearch(x)
    {    
        setData(elements[x-1]);
        console.log(elements[x-1].atomicNumber); 
        document.getElementsByClassName("popover")[0].style.zIndex=3;
        setOpen(true);
    }
    function close()
    {
        document.getElementsByClassName("popover")[0].style.zIndex=-1;
        setOpen(false);
    }
    Window.onClick=function()
    {
        if(open===true)
        {
            document.getElementsByClassName("popover")[0].style.zIndex=-1;
            setOpen(false);
        }
    }

  return (
    <div className="periodic-outer">

        <div className="outer">
            
 <div className="popover">
    <div  className="hk">
    <div className="popover-symbol">{data.symbol}</div>
    <div className="popover-name">{data.name}</div>
    </div>

   <div className="hk">
   <div><b>Atomic Mass:</b> {data.atomicMass}</div>
    <div><b>Electronic Configuration :</b> {data.electronicConfiguration}</div>
    <div><b>Oxidation States: </b>{data.oxidationStates}</div>
    <div><b>Melting Point:</b> {data.meltingPoint}</div>
    <div><b>Boiling Point:</b> {data.boilingPoint}</div>
    <div><b>Group Block:</b> {data.groupBlock}</div>
    <div><b>Standard State:</b> {data.standardState}</div>
     </div>
     <button style={{width:"2rem",height:"2rem",backgroundColor:"white",border:"0"}} className="bt" onClick={()=>close()}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
</div>

        <table className="table1">
            <tr className="each-row">
                <td>
                    <button onClick={()=>getSearch("1")}>
                        <div className="1">1</div>
                        <div><b>H</b></div>
                        <div>Hydrogen</div>
                    </button>
                </td>
                <td></td>
                <td rowSpan="3" colSpan="10"></td>
                <td rowSpan="1" colSpan="5"></td>
                <td>
                <button onClick={()=>getSearch("2")}>
                        <div className="1">2</div>
                        <div><b>He</b></div>
                        <div >Helium</div>
                    </button>
                </td>
            </tr>

            <tr className="each-row">
            <td>
                <button onClick={()=>getSearch("3")}>
                        <div>3</div>
                        <div><b>Li</b></div>
                        <div>Lithium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("4")}>
                        <div>4</div>
                        <div><b>Be</b></div>
                        <div>Beryllium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("5")}>
                        <div>5</div>
                        <div><b>B</b></div>
                        <div>Boron</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("6")}>
                        <div>6</div>
                        <div><b>C</b></div>
                        <div>Carbon</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("7")}>
                        <div>7</div>
                        <div><b>N</b></div>
                        <div>Nitrogen</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("8")}>
                        <div>8</div>
                        <div><b>O</b></div>
                        <div>Oxygen</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("9")}>
                        <div>9</div>
                        <div><b>F</b></div>
                        <div>Florine</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("10")}>
                        <div>10</div>
                        <div><b>Ne</b></div>
                        <div>Neon</div>
                    </button>
                </td>
            </tr>
            <tr className="each-row">

            <td>
                <button onClick={()=>getSearch("11")}>
                        <div>11</div>
                        <div><b>Na</b></div>
                        <div>Sodium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("12")}>
                        <div>12</div>
                        <div><b>Mg</b></div>
                        <div>Magnesium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("13")}>
                        <div>13</div>
                        <div><b>Al</b></div>
                        <div>Aluminium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("14")}>
                        <div>14</div>
                        <div><b>Si</b></div>
                        <div>Silicon</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("15")}>
                        <div>15</div>
                        <div><b>P</b></div>
                        <div>Phosphorus</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("16")}>
                        <div>16</div>
                        <div><b>S</b></div>
                        <div>Sulphur</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("17")}>
                        <div>17</div>
                        <div><b>Cl</b></div>
                        <div>Chlorine</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("18")}>
                        <div>18</div>
                        <div><b>Ar</b></div>
                        <div>Argon</div>
                    </button>
                </td>

            </tr>
            <tr className="each-row">

            <td>
                <button onClick={()=>getSearch("19")}>
                        <div>19</div>
                        <div><b>K</b></div>
                        <div>Potassium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("20")}>
                        <div>20</div>
                        <div><b>Ca</b></div>
                        <div>Calcium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("21")}>
                        <div>21</div>
                        <div><b>Sc</b></div>
                        <div>Scandium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("22")}>
                        <div>22</div>
                        <div><b>Ti</b></div>
                        <div>Titanium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("23")}>
                        <div>23</div>
                        <div><b>V</b></div>
                        <div>Vanadium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("24")}>
                        <div>24</div>
                        <div><b>Cr</b></div>
                        <div>Chromium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("25")}>
                        <div>25</div>
                        <div><b>Mn</b></div>
                        <div>Manganese</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("26")}>
                        <div>26</div>
                        <div><b>Fe</b></div>
                        <div>Iron</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("27")}>
                        <div>27</div>
                        <div><b>Co</b></div>
                        <div>Cobalt</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("28")}>
                        <div>28</div>
                        <div><b>Ni</b></div>
                        <div>Nickel</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("29")}>
                        <div>29</div>
                        <div><b>Cu</b></div>
                        <div>Copper</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("30")}>
                        <div>30</div>
                        <div><b>Zn</b></div>
                        <div>Zinc</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("31")}>
                        <div>31</div>
                        <div><b>Ga</b></div>
                        <div>Galium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("32")}>
                        <div>32</div>
                        <div><b>Ge</b></div>
                        <div>Germanium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("33")}>
                        <div>33</div>
                        <div><b>As</b></div>
                        <div>Arsenic</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("34")}>
                        <div>34</div>
                        <div><b>Se</b></div>
                        <div>Selenium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("35")}>
                        <div>35</div>
                        <div><b>Br</b></div>
                        <div>Bromine</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("36")}>
                        <div>36</div>
                        <div><b>Kr</b></div>
                        <div>Krypton</div>
                    </button>
                </td>

            </tr>
            <tr className="each-row">

            <td>
                <button onClick={()=>getSearch("37")}>
                        <div>37</div>
                        <div><b>Rb</b></div>
                        <div>Rubidium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("38")}>
                        <div>38</div>
                        <div><b>Sr</b></div>
                        <div>Strontium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("39")}>
                        <div>39</div>
                        <div><b>Y</b></div>
                        <div>Yttrium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("40")}>
                        <div>40</div>
                        <div><b>Zr</b></div>
                        <div>Zirconium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("41")}>
                        <div>41</div>
                        <div><b>Nb</b></div>
                        <div>Niobium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("42")}>
                        <div>42</div>
                        <div><b>Mo</b></div>
                        <div>Molybdenium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("43")}>
                        <div>43</div>
                        <div><b>Tc</b></div>
                        <div>Technetium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("44")}>
                        <div>44</div>
                        <div><b>Ru</b></div>
                        <div>Rutnium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("45")}>
                        <div>45</div>
                        <div><b>Rh</b></div>
                        <div>Rhodium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("46")}>
                        <div>46</div>
                        <div><b>Pd</b></div>
                        <div>Palladium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("47")}>
                        <div>47</div>
                        <div><b>Ag</b></div>
                        <div>Silver</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("48")}>
                        <div>48</div>
                        <div><b>Cd</b></div>
                        <div>Cadmium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("49")}>
                        <div>49</div>
                        <div><b>In</b></div>
                        <div>Indium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("50")}>
                        <div>50</div>
                        <div><b>Sn</b></div>
                        <div>Tin</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("51")}>
                        <div>51</div>
                        <div><b>Sb</b></div>
                        <div>Antimony</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("52")}>
                        <div>52</div>
                        <div><b>Te</b></div>
                        <div>Tellurium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("53")}>
                        <div>53</div>
                        <div><b>I</b></div>
                        <div>Iodine</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("54")}>
                        <div>54</div>
                        <div><b>Xe</b></div>
                        <div>Xenon</div>
                    </button>
                </td>

            </tr>
            <tr className="each-row">

            <td>
                <button onClick={()=>getSearch("55")}>
                        <div>55</div>
                        <div><b>Cs</b></div>
                        <div>Cesium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("56")}>
                        <div>56</div>
                        <div><b>Ba</b></div>
                        <div>Barium</div>
                    </button>
                </td>

                <td></td>

                <td>
                <button onClick={()=>getSearch("72")}>
                        <div>72</div>
                        <div><b>Hf</b></div>
                        <div>Hafnium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("73")}>
                        <div>73</div>
                        <div><b>Ta</b></div>
                        <div>Tantalum</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("74")}>
                        <div>74</div>
                        <div><b>W</b></div>
                        <div>Tungsten</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("75")}>
                        <div>75</div>
                        <div><b>Re</b></div>
                        <div>Rhenium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("76")}>
                        <div>76</div>
                        <div><b>Os</b></div>
                        <div>Osmium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("77")}>
                        <div>77</div>
                        <div><b>Ir</b></div>
                        <div>Iridium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("78")}>
                        <div>78</div>
                        <div><b>Pt</b></div>
                        <div>Platinum</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("79")}>
                        <div>79</div>
                        <div><b>Au</b></div>
                        <div>Gold</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("80")}>
                        <div>80</div>
                        <div><b>Hg</b></div>
                        <div>Mercury</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("81")}>
                        <div>81</div>
                        <div><b>Tl</b></div>
                        <div>Thallium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("82")}>
                        <div>82</div>
                        <div><b>Pb</b></div>
                        <div>Lead</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("83")}>
                        <div>83</div>
                        <div><b>Bi</b></div>
                        <div>Bismuth</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("84")}>
                        <div>84</div>
                        <div><b>Po</b></div>
                        <div>Polonium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("85")}>
                        <div>85</div>
                        <div><b>At</b></div>
                        <div>Astatine</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("86")}>
                        <div>86</div>
                        <div><b>Rn</b></div>
                        <div>Radon</div>
                    </button>
                </td>

            </tr>
            <tr className="each-row">

            <td>
                <button onClick={()=>getSearch("87")}>
                        <div>87</div>
                        <div><b>Fr</b></div>
                        <div>Francium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("88")}>
                        <div>88</div>
                        <div><b>Ra</b></div>
                        <div>Radium</div>
                    </button>
                </td>

                <td></td>

                <td>
                <button onClick={()=>getSearch("104")}>
                        <div>104</div>
                        <div><b>Rf</b></div>
                        <div>Rutherfordium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("105")}>
                        <div>105</div>
                        <div><b>Db</b></div>
                        <div>Dubnium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("106")}>
                        <div>106</div>
                        <div><b>Sg</b></div>
                        <div>Seaborgium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("107")}>
                        <div>107</div>
                        <div><b>Bh</b></div>
                        <div>Bohrium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("108")}>
                        <div>108</div>
                        <div><b>Hs</b></div>
                        <div>Hassium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("109")}>
                        <div>109</div>
                        <div><b>Mt</b></div>
                        <div>Meitnerium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("110")}>
                        <div>110</div>
                        <div><b>Ds</b></div>
                        <div>Darmstadium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("111")}>
                        <div>111</div>
                        <div><b>Rg</b></div>
                        <div>Roentgenium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("112")}>
                        <div>112</div>
                        <div><b>Cn</b></div>
                        <div>Copernicium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("113")}>
                        <div>113</div>
                        <div><b>Nh</b></div>
                        <div>Nihonium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("114")}>
                        <div>114</div>
                        <div><b>Fl</b></div>
                        <div>Flerovium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("115")}>
                        <div>115</div>
                        <div><b>Mc</b></div>
                        <div>Moscovium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("116")}>
                        <div>116</div>
                        <div><b>Lv</b></div>
                        <div>Liverovium</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("117")}>
                        <div>117</div>
                        <div><b>Ts</b></div>
                        <div>Tennessine</div>
                    </button>
                </td>

                <td>
                <button onClick={()=>getSearch("118")}>
                        <div>118</div>
                        <div><b>Og</b></div>
                        <div>Oganesson</div>
                    </button>
                </td>

            </tr>
        </table>

        <table className="table2">
            <tr>
                <td>
                    <button onClick={()=>getSearch("57")}>
                        <div>57</div>
                        <div><b>La</b></div>
                        <div>Lanthanum</div>
                    </button>
                </td>
                <td>
                    <button onClick={()=>getSearch("58")}>
                        <div>58</div>
                        <div><b>Ce</b></div>
                        <div>Cerium</div>
                    </button>
                </td>
                <td>

                <button onClick={()=>getSearch("59")}>
                        <div>59</div>
                        <div><b>Pr</b></div>
                        <div>Praseodymium</div>
                    </button>
                </td>
                <td>
                <button onClick={()=>getSearch("60")}>
                        <div>60</div>
                        <div><b>Nd</b></div>
                        <div>Neodymium</div>
                    </button>
                </td>
                <td>
                <button onClick={()=>getSearch("61")}>
                        <div>61</div>
                        <div><b>Pm</b></div>
                        <div>Promethium</div>
                    </button>
                </td>
                <td>
                <button onClick={()=>getSearch("62")}>
                        <div>62</div>
                        <div><b>Sm</b></div>
                        <div>Samarium</div>
                    </button>
                </td>
                <td>
                <button onClick={()=>getSearch("63")}>
                        <div>63</div>
                        <div><b>Eu</b></div>
                        <div>Europium</div>
                    </button>
                </td>
                <td>
                    <button onClick={()=>getSearch("64")}>
                    <div>64</div>
                    <div><b>Gd</b></div>
                    <div>Gadolium</div>
                    </button>
                </td>
                <td>
                    <button onClick={()=>getSearch("65")}>
                    <div>65</div>
                    <div><b>Tb</b></div>
                    <div>Terbium</div>
                    </button>
                </td>
                <td>
                 <button onClick={()=>getSearch("66")}>
                        <div>66</div>
                        <div><b>Dy</b></div>
                        <div>Dysposium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("67")}>
                        <div>67</div>
                        <div><b>Ho</b></div>
                        <div>Holmium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("68")}>
                        <div>68</div>
                        <div><b>Er</b></div>
                        <div>Erbium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("69")}>
                        <div>69</div>
                        <div><b>Tm</b></div>
                        <div>Thulium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("70")}>
                        <div>70</div>
                        <div><b>Yb</b></div>
                        <div>Ytterbium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("71")}>
                        <div>71</div>
                        <div><b>Lu</b></div>
                        <div>Lutetium</div>
                    </button>
                </td>
            </tr>


            <tr>

            <td>
                   <button onClick={()=>getSearch("89")}>
                        <div>89</div>
                        <div><b>Ac</b></div>
                        <div>Actinium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("90")}>
                        <div>90</div>
                        <div><b>Th</b></div>
                        <div>Thorium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("91")}>
                        <div>91</div>
                        <div><b>Pa</b></div>
                        <div>Protactinium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("92")}>
                        <div>92</div>
                        <div><b>U</b></div>
                        <div>Uranium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("93")}>
                        <div>93</div>
                        <div><b>Np</b></div>
                        <div>Neptunium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("94")}>
                        <div>94</div>
                        <div><b>Pu</b></div>
                        <div>Plutonium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("95")}>
                        <div>95</div>
                        <div><b>Am</b></div>
                        <div>Americium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("96")}>
                        <div>96</div>
                        <div><b>Cm</b></div>
                        <div>Curium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("97")}>
                        <div>97</div>
                        <div><b>Bk</b></div>
                        <div>Berkelium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("98")}>
                        <div>98</div>
                        <div><b>Cf</b></div>
                        <div>Californium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("99")}>
                        <div>99</div>
                        <div><b>Es</b></div>
                        <div>Einstenium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("100")}>
                        <div>100</div>
                        <div><b>Fm</b></div>
                        <div>Fermium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("101")}>
                        <div>101</div>
                        <div><b>Md</b></div>
                        <div>Mendelevium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("102")}>
                        <div>102</div>
                        <div><b>No</b></div>
                        <div>Nobelium</div>
                    </button>
                </td>
                <td>
                   <button onClick={()=>getSearch("103")}>
                        <div>103</div>
                        <div><b>Lr</b></div>
                        <div>Lawrencium</div>
                    </button>
                </td>

            </tr>
        </table>
      </div>

    <div className="trend-heading"><b>Trends in Periodic Table</b></div>
    <img className="trend" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Periodic_trends.svg/1920px-Periodic_trends.svg.png"></img>
    </div>
  )
        
}