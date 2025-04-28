import React from 'react';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import File from './File';
import Switch from './Switch';
import MultiSelect from './MultiSelect';
import SearchableSelect from './SearchableSelect';
import Ckeditor from './Ckeditor';
import Date from './Date';

const FormikControl = (props) => {
    switch (props.control) {
        case 'select':
            return <Select {...props} />
            
        case 'multiSelect':
            return <MultiSelect {...props} />
            
        case 'searchableSelect':
            return <SearchableSelect {...props} />

        case 'input':
            return <Input {...props} />

        case 'textarea':
            return <Textarea {...props} />

        case 'file':
            return <File {...props} />

        case 'switch':
            return <Switch {...props} />
            
        case 'ckeditor':
            return <Ckeditor {...props} />
            
        case 'date':
            return <Date {...props} />

        default:
            return null
    }
}

export default FormikControl;
