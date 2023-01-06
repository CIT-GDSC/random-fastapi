import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from '../utils/api';
const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (


  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="bold" >{purpose}</Text>
      <Text color="gray.500" fontSize="xl" fontWeight="medium" >{title1} <br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" color="gray.700">{desc1} <br /> {desc2} </Text>
      <Button fontSize="xl">
        <Link href={linkName}> {buttonText} </Link>
      </Button>
    </Box>
  </Flex>
);

Banner.displayName = 'Banner';

export default function Home({ propertyForRent, propertiesForSale }) {
  console.log(propertyForRent);
  return (
    <div>
      <Banner
        purpose="RENT A HOME"
        title1=" Rental Homes For Everyone"
        title2="Find your dream home"
        desc1="Explore our spacious and affordable homes"
        desc2="And so much more"
        buttonText="Explore Homes"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">

      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}


// const rentOptions = {
//   method: 'GET',
//   url: 'https://bayut.p.rapidapi.com/properties/list',
//   params: {
//     locationExternalIDs: '5002,6020',
//     purpose: 'for-rent',
//     hitsPerPage: '25',
//     lang: 'en',
//     sort: 'city-level-score',
//     categoryExternalID: '4'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'dae7246909msh4979a69348a89a1p1b5df7jsne874660aef4e',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
// };
// const urlParams = new URLSearchParams(rentOptions.params).toString()
// const urlApi = `${rentOptions.url}?${urlParams}`;
// // get data
// export async function getStaticProps() {
//   //for rent
//   async function getData() {
//     const response = await axios.get("https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=6", { method: rentOptions.method, headers: rentOptions.headers });
//     const data = await response
//     return data;
//   }
//   const propertyForRent = await getData();

//   return {
//     props: {
//       propertyForRent: propertyForRent?.hits,
//     }
//   }
// }


