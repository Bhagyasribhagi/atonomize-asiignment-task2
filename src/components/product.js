    import React, { useEffect, useState } from 'react'
    import { useParams } from 'react-router-dom'
    import axios from 'axios'

    import './product.css'



    import { Card,  CardBody, CardFooter, Image, Stack, Heading, Text, Button, Divider, ButtonGroup } from '@chakra-ui/react'

    const Product = () => {
        const {id} = useParams()
       const [data, setData] = useState({});
        useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log(response.data);
            if (response.status === 200) {
                setData(response.data);
            }
            } catch (error) {
            console.log(`Error fetching dat ${error.message}`);
            }
        };
    
        fetchData();
        }, [id]);


    console.log(data)


    return (
    <Card maxW='xlg' className='card-container'>
    <CardBody className='card-body'>
        <Image
        src={data.image}
        alt='Green double couch with wooden legs'
        borderRadius='xsm'
        className='product-image'
        />
        <Stack mt='6' spacing='6'>
        <Heading size='md'>{data.title}</Heading>
        <Text>
            {data.description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
            {`$${data.price}`}
        </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
            Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
            Add to cart
        </Button>
        </ButtonGroup>
    </CardFooter>
    </Card>
    )
    }

    export default Product
