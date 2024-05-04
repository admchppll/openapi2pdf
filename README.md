# OpenApi2Pdf

This introduces a Github action and Node CLI application that allows you to produce a PDF from a OpenAPI/Swagger specification file.

## Features

- Supports Swagger 2.0 and OpenAPI 3.0
- Outputs a usable PDF from a valid OpenAPI specification

## Action Usage

### Inputs

#### `spec`

**Required** The path to the specification file.

#### `out`

**Required** The output path for the generated PDF file.

### #Outputs

#### `output-file`

The path to the created PDF file.

### Example Usage

```yaml
-   uses: admchppll/openapi2pdf@v1.1.2-alpha
    with:
        spec: ./openapi-3.1.json
        out: ./test.pdf
```

## CLI Usage

Note: this is not yet published on npm!!

```bash
npm install -g @admchppll/openapi2pdf

openapi2pdf --spec ~/home/openapi-spec.json --out ~/home/pdf-spec.pdf
```

## Background

This tool is based orginally on [RapiPDF](https://github.com/mrin9/RapiPdf) and forked from [malaupa/openapi2pdf](https://github.com/malaupa/openapi2pdf). 

Both of these repositories are not currently undergoing active development and not had updates for a number of years (2021). While each go me closer to what I wanted to achieve, they didn't quite fill the gap.

The intent of this project is to:

-   Bring the existing solution up-to-date
-   Refactor the code to make it more reusable/flexible
-   Create a bespoke Github Action which can simplify/automate the process of exporting API documentation
    -   To help communicate API specifications with fellow developers, testers and internal/external stakeholders
-   To modernize the output and expand the customisability of the output PDF


## Licence

OpenApi2Pdf is [MIT licensed](LICENSE).


