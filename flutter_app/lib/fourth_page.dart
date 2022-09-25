import 'package:flutter/material.dart';

class FourthPage extends StatelessWidget {
  const FourthPage({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Another List'),
          ),
          body: Column(
            children: [
              Container(
                margin: EdgeInsets.symmetric(vertical: 20.0),
                height: 200.0,
                child: ListView(
                  scrollDirection: Axis.horizontal,
                  children: [
                    Container(
                      width: 160.0,
                      color: Colors.blue,
                    ),
                     Container(
                      width: 160.0,
                      color: Colors.red,
                    ),
                     Container(
                      width: 160.0,
                      color: Colors.green,
                    ),
                     Container(
                      width: 160.0,
                      color: Colors.yellow,
                    ),
                  ],
                ),
                ),
              
              

            ],
          ),
          ),
    );
  }
}