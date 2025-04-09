import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
export default function Header() {
    return (
        <Stack direction="horizontal" gap={3}>
            <div className="p-2">Cinephile</div>
            <Form.Control className="p-2 ms-auto" placeholder="Add your item here..." />
            <Button variant="secondary">Submit</Button>
            <div className="vr" />
        </Stack>
    );
}