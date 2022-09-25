// ignore_for_file: unused_local_variable, unused_field

import 'package:flutter/material.dart';

void main() => runApp(const SecondPage());

class SecondPage extends StatelessWidget {
  const SecondPage({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Sign In'),
        ),
        body: CustomForm(),
      ),
    );
  }
}

class CustomForm extends StatelessWidget {
  const CustomForm({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 8, vertical: 16),
          child: TextField(
            decoration: InputDecoration(
              border: UnderlineInputBorder(),
              hintText: 'Enter First Name'
            ),
          ),
        ),
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 8, vertical: 16),
          child: TextFormField(
            decoration: InputDecoration(
              border: UnderlineInputBorder(),
              hintText: 'Enter Surname'
            ),
          ),
          )
      ],
    );
  }
}
