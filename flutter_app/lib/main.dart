// ignore_for_file: must_be_immutable

import 'package:flutter/material.dart';
import 'package:flutter_app/fourth_page.dart';
import 'fifth_page.dart';
import 'second_page.dart';
import 'third_page.dart';


void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Extension(),
    );
  }
}

class Extension extends StatefulWidget {
  const Extension({super.key});

  @override
  State<Extension> createState() => _ExtensionState();
}

class _ExtensionState extends State<Extension> {
  var buttonName = 'click';
  int currentIndex = 0;
  bool _isClicked = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('App Title'),
      ),
      body: Center(
        child: currentIndex == 0
            ? Container(
                width: double.infinity,
                height: double.infinity,
                color: Colors.white,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    ElevatedButton(
                      onPressed: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (context) => const SecondPage(),
                          ),
                        );
                      },
                      child: const Text('Second Page'),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (context) => const ThirdPage(),
                          ),
                        );
                      },
                      child: const Text('Third Page'),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (context) => const FourthPage(),
                          ),
                        );
                      },
                      child: const Text('Fourth Page'),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (context) => const FifthPage(),
                          ),
                        );
                      },
                      child: const Text('Fifth Page'),
                    ),
                  ],
                ),
              )
            : GestureDetector(
                onTap: () {
                  setState(
                    () {
                      _isClicked = !_isClicked;
                    },
                  );
                },
                child: _isClicked
                    ? Image.asset('images/galaxy.jpg')
                    : Image.network(
                        'https://i.pinimg.com/originals/33/03/2a/33032aaf4f5aa8b7596e5369318069bc.jpg',
                      ),
              ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const [
          BottomNavigationBarItem(
            label: 'Home',
            icon: Icon(Icons.home),
          ),
          BottomNavigationBarItem(
            label: 'Settings',
            icon: Icon(Icons.settings),
          )
        ],
        currentIndex: currentIndex,
        onTap: (int index) {
          setState(() {
            currentIndex = index;
          });
        },
      ),
    );
  }
}
