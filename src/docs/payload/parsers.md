# Payload Parsing

The API request responses are JSON  
The response have a predefined structure you can check out [here TODO](link to switch docs)   
Most of the response structures such as interface have a complex structure not easily readable.  
Hence the following parsers exist to provide a friendly and easy to use API  



# Response Payload

parsed into `Response` instance which has the following properties and methods

## props
- responseStatus - response status
- session - session id
- host - gateway host

## methods
- isSuccessful 
- containsServiceCommand
- parse
- parseAll
- summary
- summaryTitle


# Interface payload





# Datasource payload

parsed into `DataSource` instance which has the following properties and methods

## props
- cols -> the columns
- groups -> exists for grouped data
- totalElements -> total items count
- rows -> array representation of items (this is used with `.cols` to generate `.data` )
- data -> key value representation

## methods



# File Upload

# LocationIp
