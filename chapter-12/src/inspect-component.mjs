//The metadata from the decorator on 'SampleComponent' are able to be retreived from the metadata on the object via Reflect with the 'reflect-metadata' library.
import { SampleComponent } from './sample.component.mjs';

const metadataKeys = Reflect.getMetadataKeys(SampleComponent);
console.log(`MetadataKeys: ${metadataKeys}`);

const annotations = Reflect.getMetadata('annotations', SampleComponent);
console.log('Annotations:');
console.log(`selector: ${annotations.selector}`);
console.log(`templateUrl: ${annotations.templateUrl}`);
