import React, { useState } from 'react';
import { Search, ChevronDown, Grid, LayoutGrid, MoreHorizontal, X, Bookmark, PlusCircle } from 'lucide-react';

export default function CompetitionsPage() {
  // State for view mode and sort options
  const [viewMode, setViewMode] = useState('list');
  const [sortOption, setSortOption] = useState('Recently Launched');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filterActive, setFilterActive] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Sort options
  const sortOptions = ['Hotness', 'Recently Launched', 'Closing Soon', 'Recently Completed', 'Rewards', 'Total Teams'];

  // Handle dropdown toggle
  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle option selection
  const handleSelectOption = (option) => {
    setSortOption(option);
    setDropdownOpen(false);
  };

  // Handle more options dropdown
  const handleToggleMoreOptions = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  
  // Sample competitions data
  
  const competitions = [
 {
      id: 1,
      title: "Predict Calorie Expenditure",
      series: "Playground Series - Season 5, Episode 5",
      type: "Playground",
      teams: 1520,
      timeRemaining: "22 days to go",
      score: "5.05",
      prize: "Swag",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91716/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108281&Signature=U6mjA0Z5%2BM62zM9iBGriIi4qjWOY7J9WLJhndPDUJQc%2FuE8XmKvAhbmJMqOpD5YZhWlnuYwblN0N6OpbgrxibJJmU9kZGYsWi4rK7LMmmwaA8dWWSuMPtlHCiWPjkw09pfs8AuhpcrrHOzxGr5diocIzt%2B6gsu3lBgyK0ui%2BiuJTD2PzS28q42mDYXqw05oV0CCVGfMhmeLzPFyF%2BoM01T3QTXUt1OHJT8G7k2RA1%2FEkRYtYPpJhTHA2eBAUbIgLI1aesdc2ABuy9mLjylajAv9omFm7C0dODtK%2FBGQ11XKup2Bsri%2FSrgLt48h%2FSB0vzTqa8eZm4ZvhT9DTiBzgxg%3D%3D"
    },
    {
      id: 2,
      title: "Yale/UNC-CH - Geophysical Waveform Inversion",
      series: null,
      description: "Develop physics-guided machine learning models to solve full-waveform inversion problems",
      type: "Research",
      teams: 491,
      timeRemaining: "2 months to go",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/39763/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=jve0eIDswz2vMWBIYTVXbL6PVCG59ZhgfIP28fcv81uvXvfExdNhfqh3fNrnExDnELLGimw49pW5SmKBM7STHzbJp0Rw9ujJF6n54ECtwqBNz6gl5qhHq2CGPCh8RPEzCsfNH9Gu8jytCA%2BJbv%2B%2FrBpqdOPpyEtwapEJ%2BGNnjV6CrKrUndAfyTE5KyrrenNGwU5Enojtj5Yooyp9ql7IE4IVXCHVxsFi%2FG1g7km57qJ8NsAXiNByczMsjb08EVxvQUEjIpx1sYO32zJD2CRB9Xzej4BLLeiMN2%2FgOU0%2BjwGguktG9RHO6FuowZzkT7QIkGTNOR5Fs1f7i40j42yZew%3D%3D"
    },
    {
      id: 3,
      title: "Image Matching Challenge 2025",
      series: null,
      description: "Reconstruct 3D scenes from messy image collections.",
      type: "Research",
      subtype: "Code Competition",
      teams: 609,
      timeRemaining: "25 days to go",
      prize: "$50,000",
      image:"https://storage.googleapis.com/kaggle-competitions/kaggle/91498/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108450&Signature=lFbbHJZ1oK32VEGkJ8DBQ%2FFwXWzs%2Bnxih7IY1zGlECfm1wFwaZTkETiaP3MUdTIMc9JJM1aLK07xeDSj5%2BgI%2FnOco6Y7NPy3B%2BfPmjzZcycb%2FxYd6Vfyy149WSauBpmy%2FOixHhtEM0KeWeqHwbXtjrkEELUjR2Q8QJUHtxNltWmS2NOaP8eBNwCE8xnO%2BEWaKnG7BMRQT7pYV8crVOQW4jchFfPNHaEi8n9q%2FK1hy6xNLA80uhCeeTgJXOqa9HJ0LtZTWwHGPuyMcBNCrioVznyOoRTFg3BZV2DOq3ADomXzDfO4p%2B0MjcgYovC%2BWbrZ4XIdOH14fFZCKD6cPgNd6g%3D%3D"

    },
    {
      id: 4,
      title: "Predict Podcast Listening Time",
      series: "Playground Series - Season 5, Episode 4",
      type: "Playground",
      teams: 3310,
      timeRemaining: "8 days ago",
      score: "5.04",
      prize: "Swag",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91715/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=WcOajdL6COngMc7ApFtP%2FHg8%2F7oDkp6iUPMgjSQdziQToL1koy3PjeI9Z9FayrfDkOtXzrMO6Xe3CELBcihjsSDZTz%2BCIGbZF6%2FLQ4Twyw6yjrM2CP36c%2F67XN2lMzN2pIGaGp7PLp0j2rKlfxxzQiP69t%2F%2FnLuOV%2B5Fp6d5104F%2BtQxVJUcoEvzZtbWCRMDr2SM7Op%2BS0%2FYzyJJkZNQPFtdPUzAge0PTU1%2FsMfAKTg1I3kawnSbU6HCTCg81BLGCWCpsv6XydhfSR5ggwoDhYiDVnLWCv4qfA2Cu3kRzWKzJu7%2B5v8%2B%2FUHeGkIR4VaemzsYSdEEetSB1IqHkfeWWQ%3D%3D"
    },
    {
      id: 5,
      title: "ARC Prize 2025",
      series: "Code Competition",
      type: "Featured",
      teams: 357,
      timeRemaining: "6 months to go",
      prize: "$725,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91496/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108613&Signature=nuYy3kmOtlrd0J4M07Tkl0t860lDXmA12a8tfTU4QI%2BA16YTwHGrgygNrJXAOxquyNY%2BRy7rx%2FUlicXvXy2DG2W5STtJfcia01ZC%2Fki3JDKjmOs486kIdMWY9KjDQB%2BhmUG%2B9PwxCUooKPUsGQzStIsgTwNIsHHZYnYSuP%2FqDc%2BLyglP3yAX3%2BOCd9EadRbhfx%2F6EKjvWtUq6MAP9tKiBUJInUGBeaSpNuNMnPRME25SN%2B03tHVXJf3V%2Bo1LCtA5Z2aLdzcHMlnpJ7UaPKfntvJk16P0T4%2FuuOHGlLirTiD9wJhLncY9c90nMTGdO27FDNTnVX1H51kPPsWRF9Zywg%3D%3D"

    },
    {
      id: 6,
      title: "BirdCLEF+ 2025",
      series: "Code Competition",
      type: "Research",
      teams: 1599,
      timeRemaining: "A month to go",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91844/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=PCNdn2%2BK34WZaOBHXw8kM9PD0WQmoP8jPtWocGQBKH7xNE9F6iMrzRgzCKVqb4uo1Rm9Z0k%2BaN5sAeVy8aJV5w54cvbywGGhoSmaqUWproj%2B9rLmUN0HIq9hM2AVlt9UKjqQMfACQM0iOl8gmglW%2FYjaR0YD0QtryyYlVQiS4AAdIa%2BE9NyXfYj0580SFyicVkaIT9c5WWuWTvsOUC%2BSsx%2BypfHUVGkNLTMUy8OD9Oh9zHqwUz4qq6VJ39S%2FvfNbvSB3FXK7hb%2B%2BzklkpVCNIYtF0NyMCnP2qVDWDa9pFhjj6hy0Gq2yVdySWCp%2BSU4YYumFgymq4H6iIuiyzSijKg%3D%3D"

    },
    {
      id: 7,
      title: "BYU - Locating Bacterial Flagellar Motors 2025",
      series: "Code Competition",
      type: "Research",
      teams: 908,
      timeRemaining: "A month to go",
      prize: "$65,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91249/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=fUEq411E%2F9w79S%2FZKA%2BC8EgYfppNQg7WpIwDymfSYtdTo%2Fp045wZulUUCh1E2DHt%2B62HjpU9F5ZKfKTGZAe8cToYXkGA%2BenCMuiYmcvlVvLLypWDKfak7RZ1UfzOpDQRWn1JJWBSvfeZtDE825pvrows10QzKzx3orMfwcgHqASS0qBpnHWIphH8vpnoflJ%2B%2F1YfD0QooJrL%2BUQ%2FrtGZuyA2d4URQBA33i0MdqZifGGrSn8If6DJvwtbDa5Yz9yO6gT8Svn0AxcDlk612NJKV1awaD4LjTLY26MctCfUJ%2BqZLXkeFevg7USlYVRJ0dE0xcuRfzWTQ2uKMY%2FipA%2BqvA%3D%3D"
    },
    {
      id: 8,
      title: "Binary Prediction with a Rainfall Dataset",
      series: "Playground Series - Season 5, Episode 3",
      type: "Playground",
      teams: 4381,
      timeRemaining: "A month ago",
      prize: "Swag",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91714/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747108786&Signature=npG%2BEIPvzR%2FFvCxmap8jXLW4Qqk3BV5bx%2BqJnCj74WqT0fFosw%2BXA%2BO1ZIHmOJzjgqxJPX4UntHt3ZXM7cbsqocNoz%2BU3pq7AJa8eEWa2nXg%2Fe0ocezbBfNsXYlHXDcWpmOoC0qlYLjpgPHMa3WxGuox%2B8us%2Bg3HVQOs6uAWOMV09RuD%2FcddYe1ZLyGSl1Yvm%2BGyPAY%2Bl5jXx4fpanlnAMH2acRUy2cz%2B3U3oSuRyyl%2BmSLNkDAUL9CNRGlP6Ymkiztp%2Bj7xmUGOvkSTxxpQUl3NRZOMntlsQL19CIDZkDh%2Bqt%2F5%2FB8Orpxoqw3oMp69BMH944B0AfVKg2%2BRdEvepA%3D%3D"
    },
    {
      id: 9,
      title: "Stanford RNA 3D Folding",
      series: "Code Competition",
      type: "Featured",
      teams: 1265,
      timeRemaining: "20 days to go",
      prize: "$75,000",
        image: "https://storage.googleapis.com/kaggle-competitions/kaggle/87793/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=djnu93G56vhK8CZ0bholO9Yz5KDSZ198MiRCqY9%2Bwl%2Blx7U%2FlxiSCVE53lzoK8RZq8gK6CeD3U6LqRA5Knxy0o0y8Lynl78j1oc97YBupN1gCc349vNWoMysMp4%2Bj9xvBNR%2FQIPS9SQ4zBw8CoDIzaoUIF4Vc36fIFE93bzJHnV52QjPCICS%2F5PDYc3fsgrBB88bcHuglSlN6lFjTQyw%2BfN%2FUOqZf2LVpVLd4whbzZCbit%2BLA0aW4%2BqFiXnw1CHzzX8rnSO8o8j3jeNZCPpaWvwYtdV1%2BGgiTTqDeNVMOfHuh0Lp276NnnnxZraJf4899hNgDQHn4ELlhw5DNUphaQ%3D%3D"},
        {
      id: 10,
      title: "Drawing with LLMs",
      series: "Code Competition",
      type: "Featured",
      teams: 1276,
      timeRemaining: "18 days to go",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/89659/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=JuDuxJsGt%2FnxtHdf4YBqe4%2FwQzO2pp8SCkZMpmV6U5MN5fHYrCAKJ0%2BTrYWqaCVH0aw%2FffufQY562QwfAjDuOgsbo%2FXibYxYvO0vYnS1N%2FpVlyBOwKuhm0%2Bl9TCRXP2YhpUTjtnk2FBMO%2FMEXnRmp6dSaPubYBxMMO%2Blqa2eHvEhbRh7EeQz48YYyqYcoiHo9yxqVVpOFN7duvdaYrNs%2BYgfemHXG8jtR0%2FXUmVAmC8Bu5%2FrTWWxYFARIlQE0%2FP5ar%2BDyClsN1x87%2Bn0BAR9%2FB0XNR0STwRZpELnY10nTlHSX9q%2BpeqXRPXl4JUzED1%2B03APA%2F2Icf3OoFOuUhnkmg%3D%3D"},
    {
      id: 11,
      title: "March Machine Learning Mania 2025",
      series: "Code Competition",
      type: "Featured",
      teams: 1727,
      timeRemaining: "a month ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/91497/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=Hxd0Zeypn7tg9p%2BXwHAaOaP5DFt354fwrUD36RscrzuQihI8ZteqT0ekZUM%2BIjOkc%2BEFx2WmoXg3KYcbSkkBNbXyELX0SkUg8faqPUrTEe%2FMchzn7wPMeZNorEtVrcEwc5cG3LyBk5fj%2FqQjMKb1cypjhgUloQBKOEt34TwOsEBPO0%2Fdmy5Lgv1uCPWiDxi0c9ZuTf%2Ba8x5tbiGd5oUmDiNNw1rC0%2BUyWvV2BverEyZDHnu7Xtaubzktqp805DXhd0vUItE5KecOMJG0ob3ZjL7n2EPPuOPjlbKW4Ys0o%2Bbc98J0GXDKLmpVd9prkLwG6e%2Ff0pGBN0R09CjBTtyCgQ%3D%3D"},
    {
      id: 12,
      title: "Backpack Prediction Challenge",
      series: "Playground Series - Season 5, Episode 2",
      type: "Playground",
      teams: 3393,
      timeRemaining: "2 months ago",
      prize: "Swag",
      image:" https://storage.googleapis.com/kaggle-competitions/kaggle/90274/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=KRABURCmuB8upibUKV7Rk%2FQ7dff6ki5RnGJg1fJxB%2FAYa8HRwdiBkT1ij5a0N2tCXIGV1x4GiOwB%2Ft%2BZ%2FQl23QwCNwzMVbZDVULmSTOBM%2FZyXAmmJYissi%2FYCDb19lv8VtSkmFHSvq%2BaCgzINfMHbIu1ssjZEcJ6TztmXwMSLkvH7ghmq3lEftoPeXZNbx7ZZkr57pi6uplcyJyt4SctEXAE5aqx4fkggFz8lSd5vIL4YCV2bD2DZLDi9OpXT7J18g6xj2b1HVdFzbxMshuLvadvsR1baFj4MaZOgUUBLYbsOvohlWAv%2FYV5Q68lDRvTywOdC8LUQUvnR9AdmeaPGQ%3D%3D"
    },
    {
      id: 13,
      title: "Forecasting Sticker Sales",
      series: "Playground Series - Season 5, Episode 1",
      type: "Playground",
      teams: 2722,
      timeRemaining: "3 months ago",
      prize: "Swag",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/85723/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=RTmLmHgdxEIEc0c1PFaWJgp1Bddbn5DzKHg9X34nFejoVBaDME75YrkdviXnTFWgHesjEjICeLRKwsDR3xSDBHry5hCZko9jeKNO1frZsSFcmLrYqgPLj7X3Eu6Ds79UtzqZioHmOdOZbtIxZDYVvALF1XPGQeJw%2FA%2F9sj69QplJoZjGzD5I%2BMc1HDT6Ht4Gb6EMaGV%2BzIovdb9YGLU21HBpCYlGHI%2FlULP5cbrfG9CmRLhWQty5xGg%2F3f%2Fsfqa8jTKTFclQE65wvHv%2BerxqbBvx4epswheEgI%2BvXlOuQlfCoJTCDes6KkxwiSCrqXgqFt4taGZvQhfhSs8wNsDCnw%3D%3D"},
    {
      id: 14,
      title: "Konwinski Prize",
      series: "Code Competition",
      type: "Featured",
      teams: 617,
      timeRemaining: "a month to go",
      prize: "$1,225,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84795/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=a7k97a056jD7iaWHshwUVezCEv8cEurK0niI6rlozidKyOP%2BPR7KfoRYBPHyNRRS73CdVA%2Blhv8F%2FPKXDVjmK4zFsZY8DhqaunROxaRdJowhHd3J%2FEOqeuUTREetPfok1dl%2BFueesm3qrLv0LnFXKEYWdp9149bORfi6vkJGz%2FYWTPiEle0MoNEGmdqLNr%2BOe2y4D4zMIykcLjXLYpZoJLYEEQirIw7zIIk3rqr3QJHI4F%2FLhN4NysEnmU%2BuyLALUzJPCL4PR4MnHE9aBDCBq7mjLuNpkjONlxZojPWvIimhGV12rsOPl08pdY74M%2BILAdnhGpNtzdNNsk8tAigV9Q%3D%3D"},
    {
      id: 15,
      title: "NeurIPS 2024 - Lux AI Season 3",
      series: "Simulation Competition",
      type: "Featured",
      teams: 701,
      timeRemaining: "2 months ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86411/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=PTPNvhidrmbh6ClnCpc5tdLLBLGT6EuJ4Nu%2FNEvdF%2BVJRz0Lokixlm9rfH2WC3CkUr8upNBEjDIm0vdPlusnFRAx7uEiBN%2FUwZ%2BoEgTGiUoWK64WLf%2BptP%2F1nqJLLPY5DUgL9zUqYDmgUbsvg41zgiz8feG%2F%2F99zB2ZLUcQffPfCB1umi0jLbGHxZKDraw5UTfjdFLjcpRc8OyARfXxxez0izwAuiqXjdKUKE7XUE49Aku%2F8g191EXTGV9ZwurpuR6%2B0XSfHoG8Lo7ajAimaStiytlxDvlqM%2BWC0b%2BnixR3N1noWl%2F5zOGA1Z2ZakKqwHqa6vWNIopj%2FZfb%2B6VpUqA%3D%3D"},
    {
      id: 16,
      title: "CIBMTR - Equity in post-HCT Survival Predictions",
      series: "Code Competition",
      type: "Research",
      teams: 3325,
      timeRemaining: "2 months ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/70942/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=ccE9UU5OlDElhnOR5wkHfzRrCUY4TTLGqERezoKURZ00JouPeBXPj1OBSoKzeusE3nk2vVIvh6eNki6MFKApLqqHSRe1oBS1VjXlDBdbVve38XPC1avwD%2Bx4z3HdEn0omxVFdzVRYKfYlxJNSSP0GyyvQqENbhrNE1Ukx0siMDhSyTXuCEG2eZMkAxCrpiAiLT%2F0e0DfIYEGVr93YYncKPe2KLWmvn6njgW6Y11EAEIiGbvY3Hx%2BCkbJm0b9WODEW7JJGDKU64w8NFN6Co5fvAH%2F9OJWv0zbZztu%2FLuB585mOrv3wd5PZ%2BrrBk4CyDbE0TSuIfvyMPHebAorBYwNXg%3D%3D"},
    {
      id: 17,
      title: "LLMs - You Can't Please Them All",
      series: "Code Competition",
      type: "Featured",
      teams: 1693,
      timeRemaining: "2 months ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/83035/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=X%2BOJUoUz%2BKIWMbhtkDKhAvhECU7FVxOhl7ewu%2BnKndgMDSEGPjeSe%2F%2FIrli6ABPYWqwgCUVs0Z57YG%2B9DfEXyPhwaBGuJGfXvqTQ0cNJD%2Bu27fiW5Pg3dQsvNNJlST%2FORwtwR7NBb3TJuHx1q%2BhudNnT6UIY1UDnYqCY0PL7mx1EhJeIjlRIzikOYPy3SioSVt3IqLNSgUzHSL0KIw2B%2BB3FlrqcPlxetsrQXWvTLUw9SIH7fL4zVvkc7ZKT746ZO5gwyfnc1bpxNuQpTP5HQHiat9%2B2%2B64G%2B5srmkcy4aA9GQKRtW4XJ8al7wzNsQlemsJ1ssxKNy3e4cncFXGcWw%3D%3D"},
    {
      id: 18,
      title: "Regression with an Insurance Dataset",
      series: "Playground Series - Season 4, Episode 12",
      type: "Playground",
      teams: 2390,
      timeRemaining: "4 months ago",
      prize: "Swag",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/84896/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747109835&Signature=l8ttw4Q%2BJkvMeqrYsvCZ8f96kLQ8TdR7CDSXYWDbQUiAEU8ZcNoeSKlVW%2BNQEWF%2FIC1d7JH%2BNxqCjP1KJ%2BPGjYnaMYzUAorBjdLu7iv%2BchTt0GADkloxq1VQzgmcGGXETaLOLkZIdt%2BFt%2FJDC6G0fvvWoG5Mu0R3FQBVBaq58cxt8ye0kvWcjg5jiwa6Di4moIg7NuNYEBCV2iGb%2BaQf2%2Fl5sClD4rf9FuLTWJvcoyhwrxs%2BgY2Sa6L3b%2FaYcg4zIWnjbl%2FjpCu235MLLsSJqKYQMVg1DV3rgJqKG1faU1%2Bfmy4YO3DcXzu0qkCEPJT7%2BT9LEN6oRiUSQX6mmtpgcg%3D%3D"},
    {
      id: 19,
      title: "Santa 2024 - The Perplexity Permutation Puzzle",
      series: "Code Competition",
      type: "Featured",
      teams: 1514,
      timeRemaining: "3 months ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/88046/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=NdSeC4eT4eoR%2FXTt6FcIYQpct1muiPS1xnC6T5dt7p%2BHKEjZpveHStt1hfRSmPeki4WpGx13k4C%2B9dsNn0GoMJp7Z0pzk5vRKGhNYsdP82DdDHh%2Baiv5z%2BMG023Hh36GHE1macN4lN55VuMqWDCiYsQjw8THfbWiJZb179Y9yaYVjW%2FNE63hAkFTrxMW86Ka3Y8501SXIr%2F8aY%2F1wHbTaGrH04M8LOt8ykbxGIHZEQ1r8AFZ%2BaBwCkgCtwuxHWovb5rS7Q4%2Bm5xDF7xo%2FIMf7q5z1%2FAM435uIHJ77voCLsks8aCF2QsUYE92lNuD2Q0HOtUDDcSSQ3qCSVwS9cv9Ng%3D%3D"},
    {
      id: 20,
      title: "FIDE & Google Efficient Chess AI Challenge",
      series: "Simulation Competition",
      type: "Featured",
      teams: 1120,
      timeRemaining: "2 months ago",
      prize: "$50,000",
      image: "https://storage.googleapis.com/kaggle-competitions/kaggle/86524/logos/thumb76_76.png?GoogleAccessId=web-data@kaggle-161607.iam.gserviceaccount.com&Expires=1747110704&Signature=Pt%2BHe2A83ZFYwjQkQw5ESck17IZvR9IuIj1Oc1b3JtMSQwtsdAIQyP7%2FjHt7MB0Afha4gDgeg6idMhu%2FvP0feb8Y1Yf5CyWGV3Z90ykjpqkzZBwSTFj1WP%2F%2FW4cYqUQSP3IrLoGzMSyJBekoBgWp4JYlEbpP%2FyfK0CqBIyOzJDKv%2FZ4J1eDPzqiDeI%2Bfcfmm1yy00NWhE2N95%2BOMHkfmcf6Wdmz6JkPmwacStbdYUzA0pGPYUJ%2FFyyCfFX1zuJtcxwOvAVXnzCwcIf%2B5h5OTmX%2B26Ph9pqKULsW4zfVQNNZu9u3rI375lPt%2BuxCQaf47dWEcA%2F56m1oFtrcL1k%2BDbA%3D%3D"},
 
  ];

  // More options menu items
  const moreOptions = [
       { icon: <PlusCircle className="h-4 w-4 mr-2" />, label: "Add to collections" },
        { icon: <Bookmark className="h-4 w-4 mr-2" />, label: "Bookmark" },
  ];

  return (
    <div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-left">Competitions</h1>

        {/* Active Filters */}
        {filterActive && (
          <div className="mb-6 flex items-center gap-2">
            <div className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 shadow-sm border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-700">
              <span className="font-medium">All competitions</span>
              <button
                onClick={() => setFilterActive(false)}
                className="p-1 rounded-full hover:bg-gray-300 transition"
                aria-label="Remove filter"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Results Section */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Results</h2>
          <div className="flex items-center gap-4">
            {/* Dropdown component */}
            <div className="relative">
              <button
                className="flex items-center gap-2 text-gray-700"
                onClick={handleToggleDropdown}
                aria-label="Sort options"
              >
                <span>{sortOption}</span>
                <ChevronDown className="h-4 w-4 text-gray-700" />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-10 border border-gray-200">
                  {sortOptions.map((option) => (
                    <div
                      key={option}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        option === sortOption ? 'bg-gray-200' : ''
                      }`}
                      onClick={() => handleSelectOption(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
              aria-label="Toggle view mode"
            >
              {viewMode === 'list' ? (
                <Grid className="h-5 w-5 text-gray-700" />
              ) : (
                <LayoutGrid className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Competition Cards - List or Grid View */}
        {viewMode === 'list' ? (
          // List View
          <div className="space-y-4">
            {competitions.map((competition) => (
              <div key={competition.id} className="bg-white shadow rounded-lg flex items-stretch border-t border-gray-100">
                <div className="relative p-4 flex-shrink-0">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  {competition.score && (
                    <div className="absolute bottom-1 left-4 bg-white px-2 py-1 text-xs font-bold rounded shadow">
                      {competition.score}
                    </div>
                  )}
                </div>
                <div className="flex-grow p-4">
                  <h3 className="text-lg font-bold text-gray-800">{competition.title}</h3>
                  {competition.series && (
                    <p className="text-sm text-gray-600">{competition.series}</p>
                  )}
                  {competition.description && (
                    <p className="text-sm text-gray-600">{competition.description}</p>
                  )}
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>{competition.type}</span>
                    {competition.subtype && (
                      <>
                        <span className="mx-1">·</span>
                        <span>{competition.subtype}</span>
                      </>
                    )}
                    <span className="mx-1">·</span>
                    <span>{competition.teams} Teams</span>
                    <span className="mx-1">·</span>
                    <span>{competition.timeRemaining}</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col items-end justify-between">
                  <div className="relative">
                    <button
                      onClick={() => handleToggleMoreOptions(competition.id)}
                      className="p-1 hover:bg-gray-100 rounded-full"
                      aria-label="More options"
                    >
                      <MoreHorizontal className="h-5 w-5 text-gray-500" />
                    </button>

                    {/* More options dropdown */}
                    {activeDropdown === competition.id && (
                      <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-20 border border-gray-200">
                        {moreOptions.map((option, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {option.icon}
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-lg font-bold text-right">
                    {competition.prize}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitions.map((competition) => (
              <div key={competition.id} className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
                <div className="relative">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <div className="bg-white rounded-full p-1">
                      <img src="/api/placeholder/24/24" alt="Logo" className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-bold text-gray-800">{competition.title}</h3>
                    <div className="relative">
                      <button
                        onClick={() => handleToggleMoreOptions(`grid-${competition.id}`)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                        aria-label="More options"
                      >
                        <MoreHorizontal className="h-5 w-5 text-gray-500" />
                      </button>

                      {/* More options dropdown */}
                      {activeDropdown === `grid-${competition.id}` && (
                        <div className="absolute right-0 mt-1 w-48 bg-white rounded shadow-lg z-20 border border-gray-200">
                          {moreOptions.map((option, index) => (
                            <div
                              key={index}
                              className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {option.icon}
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {competition.series && (
                    <p className="text-sm text-gray-600 mb-1">{competition.series}</p>
                  )}

                  <div className="text-sm text-gray-500 mb-2">
                    <p>{competition.type}</p>
                    <p>{competition.teams} Teams</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 p-4 flex justify-between items-center">
                  <div className="font-bold">
                    {competition.prize}
                  </div>
                  <div className="text-sm text-gray-500">
                    {competition.timeRemaining}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}