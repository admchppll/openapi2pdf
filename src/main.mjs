'use strict'

import createPdf from './lib/pdf-gen.mjs';
import { readFileSync, writeFileSync } from 'fs';

export async function generatePdf(argv) {
    try {
      const data = await createPdf(JSON.parse(readFileSync(argv.spec, { encoding: 'utf-8' })), {
        pdfSortTags: false,
        pdfPrimaryColor: argv.primaryColor ? argv.primaryColor : '',
        // pdfAlternateColor: '',
        pdfTitle: 'API Reference',
        pdfCoverText: '',
        pdfSecurityText: '',
        pdfApiText: '',
        pdfSchemaStyle: 'object',
        pdfFooterText: '',
        includeInfo: true,
        includeToc: true,
        includeSecurity: true,
        includeExample: false,
        includeApiDetails: true,
        includeApiList: false,
        localize: {
          index: 'INDEX',
          api: 'API',
          apiList: 'API List',
          apiReference: 'API Reference adam',
          apiVersion: 'API Version',
          contact: 'CONTACT',
          name: 'NAME',
          email: 'EMAIL',
          url: 'URL',
          termsOfService: 'Terms of service',
          securityAndAuthentication: 'Security and Authentication',
          securitySchemes: 'SECURITY SCHEMES',
          key: 'KEY',
          type: 'TYPE',
          example: 'EXAMPLE',
          description: 'DESCRIPTION',
          request: 'REQUEST',
          requestBody: 'REQUEST BODY',
          response: 'RESPONSE',
          responseModel: 'RESPONSE MODEL',
          statusCode: 'STATUS CODE',
          deprecated: 'DEPRECATED',
          allowed: 'ALLOWED',
          default: 'DEFAULT',
          readOnly: 'READ ONLY',
          writeOnly: 'WRITE ONLY',
          enumValues: 'ENUM',
          pattern: 'PATTERN',
          parameters: 'Parameters',
          noRequestParameters: 'No request parameters',
          method: 'METHOD',
        },
      });
  
      writeFileSync(argv.out, data);
    } catch (e) {
      console.error('Something went wrong! Please check your input parameters!');
    }
  }