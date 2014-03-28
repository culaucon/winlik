var WinLik = {
    userLogged: 36,

    data: {
        "users": [
            {'name': 'John Greco', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 1], 'reviews': [],
                'following': {'leagues': [0, 4, 2], 'users': [37, 26, 10, 45, 39, 2, 33, 9, 4, 27], 'teams': [1, 12, 0, 7]}, 'avatar URL': 'image/users/profile/user0.jpg', 'cover URL': 'image/users/cover/user0.jpg'},
            {'name': 'Peter Seg', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [1], 'reviews': [],
                'following': {'leagues': [0, 2, 1], 'users': [47, 31, 43, 36, 18, 23, 5, 8, 7, 39, 20, 6, 2, 11, 33, 21, 47, 19], 'teams': [4, 10, 7, 11, 0]}, 'avatar URL': 'image/users/profile/user1.jpg', 'cover URL': 'image/users/cover/user1.jpg'},
            {'name': 'Lion Shreik', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 1], 'reviews': [],
                'following': {'leagues': [1, 2], 'users': [12, 47, 4, 22, 6, 16, 31, 37, 10, 20], 'teams': [2, 5]}, 'avatar URL': 'image/users/profile/user2.jpg', 'cover URL': 'image/users/cover/user2.jpg'},
            {'name': 'Dylan Fisher', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [1], 'reviews': [],
                'following': {'leagues': [3, 2, 1], 'users': [40, 9, 17, 23, 5, 44, 7, 2, 18], 'teams': [5]}, 'avatar URL': 'image/users/profile/user3.jpg', 'cover URL': 'image/users/cover/user3.jpg'},
            {'name': 'Susan Stein', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 1], 'reviews': [],
                'following': {'leagues': [0, 1, 4], 'users': [31, 45, 49, 28, 45, 11, 1, 6, 48, 32, 37, 25, 43, 9], 'teams': [13, 12, 3, 0, 8, 6]}, 'avatar URL': 'image/users/profile/user4.jpg', 'cover URL': 'image/users/cover/user4.jpg'},
            {'name': 'Hubert Austin', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [1, 2], 'reviews': [],
                'following': {'leagues': [2, 3, 1], 'users': [3, 48, 38, 4, 44, 22], 'teams': [2]}, 'avatar URL': 'image/users/profile/user5.jpg', 'cover URL': 'image/users/cover/user5.jpg'},
            {'name': 'Erin Han', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 1, 2], 'reviews': [],
                'following': {'leagues': [4, 2, 1, 0], 'users': [6, 20, 22, 45, 27, 36, 35, 34, 16, 40, 32, 17, 26, 1, 4], 'teams': [9, 15, 1, 6, 4, 11]}, 'avatar URL': 'image/users/profile/user6.jpg', 'cover URL': 'image/users/cover/user6.jpg'},
            {'name': 'Kermit Hadley', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [1, 2], 'reviews': [],
                'following': {'leagues': [3, 1, 2], 'users': [13, 23, 15, 2, 28, 4, 14], 'teams': [15, 2, 1, 14, 12]}, 'avatar URL': 'image/users/profile/user7.jpg', 'cover URL': 'image/users/cover/user7.jpg'},
            {'name': 'Richard Wang', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 1, 2], 'reviews': [],
                'following': {'leagues': [3, 2], 'users': [2, 19, 11, 6, 0, 28, 10], 'teams': [3, 1, 5, 10, 7]}, 'avatar URL': 'image/users/profile/user8.jpg', 'cover URL': 'image/users/cover/user8.jpg'},
            {'name': 'Thomas Miligan', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [1, 2], 'reviews': [],
                'following': {'leagues': [4, 1, 2], 'users': [20, 40, 30, 6, 45, 48, 42, 21, 35, 49, 38, 12, 32, 26, 2, 17], 'teams': []}, 'avatar URL': 'image/users/profile/user9.jpg', 'cover URL': 'image/users/cover/user9.jpg'},
            {'name': 'Brad Carrera', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [3, 1, 0], 'users': [19, 15, 41, 24, 47, 16, 3, 31, 1, 27, 0], 'teams': [9, 13, 6, 12]}, 'avatar URL': 'image/users/profile/user10.jpg', 'cover URL': 'image/users/cover/user10.jpg'},
            {'name': 'Rosetta Fontanez', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [2, 1, 4], 'users': [13, 5, 27, 30, 0, 25, 41, 2, 9, 35], 'teams': [11, 7, 14]}, 'avatar URL': 'image/users/profile/user11.jpg', 'cover URL': 'image/users/cover/user11.jpg'},
            {'name': 'Jun Park', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [0, 1], 'users': [0, 40, 48, 33, 21, 43, 16, 10, 29, 15, 32, 13, 36], 'teams': [4, 14, 3, 5]}, 'avatar URL': 'image/users/profile/user12.jpg', 'cover URL': 'image/users/cover/user12.jpg'},
            {'name': 'James Almago', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [1], 'users': [41, 45, 37, 28, 22, 0, 18, 35, 17, 30, 13], 'teams': [5, 0, 8, 10, 6, 12]}, 'avatar URL': 'image/users/profile/user13.jpg', 'cover URL': 'image/users/cover/user13.jpg'},
            {'name': 'Leo Bean', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [0], 'users': [33, 26, 42], 'teams': [5, 11, 0, 3, 1, 9]}, 'avatar URL': 'image/users/profile/user14.jpg', 'cover URL': 'image/users/cover/user14.jpg'},
            {'name': 'Earl Ison', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [4], 'users': [38, 25, 4, 36, 9, 43, 29, 21, 37, 15, 23, 0, 7, 17, 16], 'teams': [15, 4, 11, 6]}, 'avatar URL': 'image/users/profile/user15.jpg', 'cover URL': 'image/users/cover/user15.jpg'},
            {'name': 'Yiying Liu', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [1, 3], 'users': [36, 47, 2, 40, 35, 38, 17, 45, 0, 3, 14, 48, 37], 'teams': []}, 'avatar URL': 'image/users/profile/user16.jpg', 'cover URL': 'image/users/cover/user16.jpg'},
            {'name': 'Karl Obaba', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [4, 1], 'users': [23, 32, 38, 31, 39, 17, 29, 22, 30, 41, 48], 'teams': [9, 11, 15, 2]}, 'avatar URL': 'image/users/profile/user17.jpg', 'cover URL': 'image/users/cover/user17.jpg'},
            {'name': 'Mary F. Mattson', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [1, 2], 'users': [39, 26, 35, 48, 4, 43, 5, 42, 13, 40, 32, 36, 3, 19, 6], 'teams': [13, 2, 11, 4, 6]}, 'avatar URL': 'image/users/profile/user18.jpg', 'cover URL': 'image/users/cover/user18.jpg'},
            {'name': 'Mikel Burton', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [2], 'users': [46, 32, 27, 22, 30, 43, 41, 33, 47, 10, 39, 31, 26, 1, 17], 'teams': [11, 2, 9, 3]}, 'avatar URL': 'image/users/profile/user19.jpg', 'cover URL': 'image/users/cover/user19.jpg'},
            {'name': 'Malcolm Allen', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [1], 'users': [14, 25, 2, 15, 27], 'teams': [14]}, 'avatar URL': 'image/users/profile/user20.jpg', 'cover URL': 'image/users/cover/user20.jpg'},
            {'name': 'Matthew Carrillo', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [0], 'users': [44, 17, 19, 12, 0, 30, 25, 6, 32, 1, 47], 'teams': [7, 13]}, 'avatar URL': 'image/users/profile/user21.jpg', 'cover URL': 'image/users/cover/user21.jpg'},
            {'name': 'James Hart', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [2], 'users': [6, 22, 15, 43, 9, 2, 34, 16, 35, 38], 'teams': [13, 5, 11, 9, 14, 4]}, 'avatar URL': 'image/users/profile/user22.jpg', 'cover URL': 'image/users/cover/user22.jpg'},
            {'name': 'Charlotte Pringle', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [4], 'users': [46, 2, 38, 8, 39, 31, 4, 36, 5, 19, 43, 25], 'teams': [15, 6, 3, 5]}, 'avatar URL': 'image/users/profile/user23.jpg', 'cover URL': 'image/users/cover/user23.jpg'},
            {'name': 'Alice Frith', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [5, 2], 'users': [11, 5, 42, 24, 17, 15, 45, 12, 49, 43, 31], 'teams': [12, 11, 14, 13, 1]}, 'avatar URL': 'image/users/profile/user24.jpg', 'cover URL': 'image/users/cover/user24.jpg'},
            {'name': 'Susan Sellars', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [1, 5], 'users': [8, 38, 40, 15, 41, 36, 42, 12, 9, 2, 19, 20, 14, 27], 'teams': [6, 9, 7]}, 'avatar URL': 'image/users/profile/user25.jpg', 'cover URL': 'image/users/cover/user25.jpg'},
            {'name': 'Katherine Platt', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [2, 5], 'users': [22, 14, 19, 4, 27, 47, 42, 23, 41, 18, 25, 10, 31, 12, 46], 'teams': [6, 11, 12, 3]}, 'avatar URL': 'image/users/profile/user26.jpg', 'cover URL': 'image/users/cover/user26.jpg'},
            {'name': 'Sam Scott', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [1, 2], 'users': [24, 28, 27, 20, 32, 15, 23, 39, 2, 0, 43, 44, 47, 1, 6], 'teams': [4, 11, 0, 14, 3, 8]}, 'avatar URL': 'image/users/profile/user27.jpg', 'cover URL': 'image/users/cover/user27.jpg'},
            {'name': 'Anthony Burton', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [5, 3, 1], 'users': [16, 14, 20, 13, 4, 38, 29, 6, 32, 25], 'teams': [10, 2, 4, 13, 6, 1]}, 'avatar URL': 'image/users/profile/user28.jpg', 'cover URL': 'image/users/cover/user28.jpg'},
            {'name': 'Dora Wyman', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [0, 1, 5], 'users': [27, 37, 34, 9, 33, 0, 43, 17, 45], 'teams': []}, 'avatar URL': 'image/users/profile/user29.jpg', 'cover URL': 'image/users/cover/user29.jpg'},
            {'name': 'Xiao Chen', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [3, 2, 5], 'users': [25, 29, 21, 48, 6, 34, 28, 31, 37, 27, 22], 'teams': [2, 14, 7]}, 'avatar URL': 'image/users/profile/user30.jpg', 'cover URL': 'image/users/cover/user30.jpg'},
            {'name': 'Gordon Spitzer', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [1, 2, 4], 'users': [42, 3, 16, 27, 6, 30, 45, 40, 24], 'teams': [4, 8, 13, 6]}, 'avatar URL': 'image/users/profile/user31.jpg', 'cover URL': 'image/users/cover/user31.jpg'},
            {'name': 'Daniella Paquette', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [0, 3], 'users': [33, 11, 30, 25, 2, 10, 20, 41, 5, 38], 'teams': [1, 7]}, 'avatar URL': 'image/users/profile/user32.jpg', 'cover URL': 'image/users/cover/user32.jpg'},
            {'name': 'Hao Liu', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [5], 'users': [42, 7, 40, 30, 28, 33, 12, 36, 35, 47], 'teams': [11, 5]}, 'avatar URL': 'image/users/profile/user33.jpg', 'cover URL': 'image/users/cover/user33.jpg'},
            {'name': 'Han Ga Choi', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [1, 2], 'users': [4, 44, 12, 38, 45, 40, 31, 21, 43, 42], 'teams': [5, 13]}, 'avatar URL': 'image/users/profile/user34.jpg', 'cover URL': 'image/users/cover/user34.jpg'},
            {'name': 'Soy Cho Sok', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [3, 4], 'users': [24, 33, 11, 20, 38, 19], 'teams': [11, 5, 9, 2]}, 'avatar URL': 'image/users/profile/user35.jpg', 'cover URL': 'image/users/cover/user35.jpg'},
            {'name': 'Jessica Alba', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [2, 4, 1], 'users': [38, 15, 29, 32, 19, 44, 8, 0, 47, 25, 5, 30, 43, 12, 46, 13, 26], 'teams': [7, 12, 13]}, 'avatar URL': 'image/users/profile/user36.jpg', 'cover URL': 'image/users/cover/user36.jpg'},
            {'name': 'Kim Juna', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [3, 2, 1], 'users': [7, 24, 17, 5, 18, 22, 19, 37, 48, 33, 13, 2, 6], 'teams': [2, 12, 9]}, 'avatar URL': 'image/users/profile/user37.jpg', 'cover URL': 'image/users/cover/user37.jpg'},
            {'name': 'Gracie Gold', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [5, 2, 1], 'users': [18, 0, 12, 27, 30, 47, 35, 33, 25, 2, 20, 6], 'teams': [8, 11, 9]}, 'avatar URL': 'image/users/profile/user38.jpg', 'cover URL': 'image/users/cover/user38.jpg'},
            {'name': 'Leah Dizon', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [1], 'users': [15, 49, 44, 13, 21, 5, 48, 30, 25, 10, 2, 42, 14, 12], 'teams': []}, 'avatar URL': 'image/users/profile/user39.jpg', 'cover URL': 'image/users/cover/user39.jpg'},
            {'name': 'Kha Ngan', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [0], 'users': [23, 32, 11, 28, 10, 25, 17, 47, 7, 34, 44, 31, 40, 29], 'teams': []}, 'avatar URL': 'image/users/profile/user40.jpg', 'cover URL': 'image/users/cover/user40.jpg'},
            {'name': 'Tina Maze', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [3], 'users': [40, 8, 41, 2, 31, 29, 5, 25], 'teams': []}, 'avatar URL': 'image/users/profile/user41.jpg', 'cover URL': 'image/users/cover/user41.jpg'},
            {'name': 'Anna Sidorova', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [2], 'users': [3, 1, 38, 12], 'teams': []}, 'avatar URL': 'image/users/profile/user42.jpg', 'cover URL': 'image/users/cover/user42.jpg'},
            {'name': 'Alyson Dudek', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [5, 3], 'users': [12, 43, 7, 27, 30, 39, 14, 28, 40, 17, 34, 41], 'teams': [6, 13, 8, 12, 3]}, 'avatar URL': 'image/users/profile/user43.jpg', 'cover URL': 'image/users/cover/user43.jpg'},
            {'name': 'Alyssa Chia', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [4], 'users': [5, 28, 45, 27, 10, 39], 'teams': [5, 9, 0, 8, 11]}, 'avatar URL': 'image/users/profile/user44.jpg', 'cover URL': 'image/users/cover/user44.jpg'},
            {'name': 'Liu Yi Fei', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [2, 4], 'users': [35, 11, 19, 47, 21, 16, 6, 23, 31, 36, 8, 18], 'teams': [6, 8, 5, 15, 9]}, 'avatar URL': 'image/users/profile/user45.jpg', 'cover URL': 'image/users/cover/user45.jpg'},
            {'name': 'Fan Bingbing', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [1], 'users': [40, 27, 46], 'teams': []}, 'avatar URL': 'image/users/profile/user46.jpg', 'cover URL': 'image/users/cover/user46.jpg'},
            {'name': 'Kiira Korpi', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [3, 2], 'users': [7, 26, 32, 25, 33, 12], 'teams': [5, 10, 1, 0]}, 'avatar URL': 'image/users/profile/user47.jpg', 'cover URL': 'image/users/cover/user47.jpg'},
            {'name': 'Lindsey Vonn', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [0, 2], 'reviews': [],
                'following': {'leagues': [0], 'users': [44, 4, 15, 6, 32, 33, 47, 20, 43, 13, 19, 8, 30, 45], 'teams': [14, 3]}, 'avatar URL': 'image/users/profile/user48.jpg', 'cover URL': 'image/users/cover/user48.jpg'},
            {'name': 'Tyra Banks', 'status': 'Thank you for caring for me. I\'m working hard.', 'leagues-played': [], 'communities': [2], 'reviews': [],
                'following': {'leagues': [1], 'users': [21, 8, 5, 35, 42, 37, 10, 34, 11, 16, 38], 'teams': [1, 12]}, 'avatar URL': 'image/users/profile/user49.jpg', 'cover URL': 'image/users/cover/user49.jpg'}
        ],
        "communities": [
            {'name': 'San Francisco Gifted High School Mathematicians', 'creator': 8, 'managers': [4, 26, 32, 40], 'members': [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48], 'teams': [8, 9, 10, 11, 12, 13, 14, 15], 'leagues': [0]},
            {'name': 'Stanford Algo Ninjas', 'creator': 3, 'managers': 'all', 'members': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'teams': [], 'leagues': [3]},
            {'name': 'Stanford Alumni Class of 2004', 'creator': 11, 'managers': [10, 12, 18, 20, 34], 'members': [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 'teams': [0, 1, 2, 3, 4, 5, 6, 7], 'leagues': [1, 2, 4]}
        ],
        "teams": [
            {'name': 'Smoking Legs', 'members': [41, 42, 43, 44, 45], 'creator': 41, 'reviews': [], 'avatar URL': 'image/teams/profile/team0.jpg', 'cover URL': 'image/teams/cover/team0.jpg'},
            {'name': 'Supermen', 'members': [6, 7, 8, 9], 'creator': 6, 'reviews': [], 'avatar URL': 'image/teams/profile/team1.jpg', 'cover URL': 'image/teams/cover/team1.jpg'},
            {'name': 'Galileo Balls', 'members': [13, 14, 15, 16], 'creator': 13, 'reviews': [], 'avatar URL': 'image/teams/profile/team2.jpg', 'cover URL': 'image/teams/cover/team2.jpg'},
            {'name': 'OB United', 'members': [17, 19, 21], 'creator': 17, 'reviews': [], 'avatar URL': 'image/teams/profile/team3.jpg', 'cover URL': 'image/teams/cover/team3.jpg'},
            {'name': 'Sneaky Ballers', 'members': [22, 23, 24], 'creator': 22, 'reviews': [], 'avatar URL': 'image/teams/profile/team4.jpg', 'cover URL': 'image/teams/cover/team4.jpg'},
            {'name': 'All Stars United', 'members': [25, 26, 27, 28, 29, 30, 31, 32, 33, 40], 'creator': 25, 'reviews': [], 'avatar URL': 'image/teams/profile/team5.jpg', 'cover URL': 'image/teams/cover/team5.jpg'},
            {'name': 'Raging Hurricanes', 'members': [32, 33, 40], 'creator': 32, 'reviews': [], 'avatar URL': 'image/teams/profile/team6.jpg', 'cover URL': 'image/teams/cover/team6.jpg'},
            {'name': 'Wild Masters', 'members': [35, 36, 37], 'creator': 36, 'reviews': [], 'avatar URL': 'image/teams/profile/team7.jpg', 'cover URL': 'image/teams/cover/team7.jpg'},
            {'name': 'Palo Alto Greeks', 'members': [0, 2], 'creator': 0, 'reviews': [], 'avatar URL': 'image/teams/profile/team8.jpg', 'cover URL': 'image/teams/cover/team8.jpg'},
            {'name': 'Menlo Park Algo-ers', 'members': [10, 12], 'creator': 10, 'reviews': [], 'avatar URL': 'image/teams/profile/team9.jpg', 'cover URL': 'image/teams/cover/team9.jpg'},
            {'name': 'Hayward Number Players', 'members': [14, 16], 'creator': 14, 'reviews': [], 'avatar URL': 'image/teams/profile/team10.jpg', 'cover URL': 'image/teams/cover/team10.jpg'},
            {'name': 'The Solvers', 'members': [18, 20], 'creator': 18, 'reviews': [], 'avatar URL': 'image/teams/profile/team11.jpg', 'cover URL': 'image/teams/cover/team11.jpg'},
            {'name': 'Constant Timers', 'members': [24, 28], 'creator': 24, 'reviews': [], 'avatar URL': 'image/teams/profile/team12.jpg', 'cover URL': 'image/teams/cover/team12.jpg'},
            {'name': 'Eq Stormers', 'members': [34, 36], 'creator': 36, 'reviews': [], 'avatar URL': 'image/teams/profile/team13.jpg', 'cover URL': 'image/teams/cover/team13.jpg'},
            {'name': 'Sigma Transformers', 'members': [42, 44], 'creator': 42, 'reviews': [], 'avatar URL': 'image/teams/profile/team14.jpg', 'cover URL': 'image/teams/cover/team14.jpg'},
            {'name': 'The Infinite Permuters', 'members': [46, 48], 'creator': 48, 'reviews': [], 'avatar URL': 'image/teams/profile/team15.jpg', 'cover URL': 'image/teams/cover/team15.jpg'}
        ],
        "leagues": [
            {'name': 'SF Descartes Competition 2012', 'stages': [0, 1, 2], 'asTeam': true, 'champions': [{'participantID': 8, 'champion-photo': 0}],
                'teams': [
                    {'teamID': 8, 'members': [0, 2]},
                    {'teamID': 9, 'members': [10, 12]},
                    {'teamID': 10, 'members': [14, 16]},
                    {'teamID': 11, 'members': [18, 20]},
                    {'teamID': 12, 'members': [24, 28]},
                    {'teamID': 13, 'members': [34, 36]},
                    {'teamID': 14, 'members': [42, 44]},
                    {'teamID': 15, 'members': [46, 48]}
                ],
                'creator': 4},

            {'name': 'The Beautiful Faces', 'stages': [3, 4, 5, 6], 'asTeam': false, 'champions': [{'participantID': 40, 'champion-photo': 1}, {'participantID': 36, 'champion-photo': 2}, {'participantID': 37, 'champion-photo': 3}], 'players': [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 'creator': 10},

            {'name': '3 vs 3 Soccer 2013', 'stages': [7, 8, 9], 'asTeam': true, 'champions': [{'participantID': 4, 'champion-photo': 4}],
                'teams': [
                    {'teamID': 0, 'members': [41, 42, 43, 44, 45]},
                    {'teamID': 1, 'members': [6, 7, 8, 9]},
                    {'teamID': 2, 'members': [13, 14, 15, 16]},
                    {'teamID': 3, 'members': [17, 19, 21]},
                    {'teamID': 4, 'members': [22, 23, 24]},
                    {'teamID': 5, 'members': [25, 26, 27, 28, 29, 30]},
                    {'teamID': 6, 'members': [32, 33, 40]},
                    {'teamID': 7, 'members': [35, 36, 37]}
                ],
                'creator': 12},

            {'name': 'Machine Learning', 'stages': [10], 'asTeam': false, 'champions': [], 'players': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'creator': 3},
            {'name': 'The Voice We Love', 'stages': [11, 12, 13, 14, 15], 'champions': [], 'asTeam': false, 'players': [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 'creator': 18},
            {'name': 'Wild Sprinter', 'stages': [16, 17], 'asTeam': false, 'champions': [{'participantID': 15, 'champion-photo': 5}, {'participantID': 17, 'champion-photo': 6}], 'players': [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'creator': 20}
        ],
        "stages": [
            // SF Descartes Competition 2012
            {'groups': [0], 'matches': [0, 1, 2, 3], 'started': true, 'ended': true}, // 0
            {'groups': [1], 'matches': [4, 5], 'started': true, 'ended': true}, // 1
            {'groups': [2], 'matches': [6], 'started': true, 'ended': true}, // 2

            // The Beautiful Faces
            {'groups': [3], 'matches': [7], 'started': true, 'ended': true}, // 3
            {'groups': [4], 'matches': [8], 'started': true, 'ended': true}, // 4
            {'groups': [5], 'matches': [9], 'started': true, 'ended': true}, // 5
            {'groups': [6], 'matches': [10], 'started': true, 'ended': true}, // 6

            // 3 vs 3 Soccer 2013
            {'groups': [7, 8], 'matches': [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], 'started': true, 'ended': true}, // 7
            {'groups': [9], 'matches': [23, 24], 'started': true, 'ended': true}, // 8
            {'groups': [10], 'matches': [25], 'started': true, 'ended': true}, // 9

            // Machine Learning
            {'groups': [11], 'matches': [26, 27, 28, 29, 30], 'started': true, 'ended': false}, // 10

            // The Voice We Love
            {'groups': [12], 'matches': [31], 'started': true, 'ended': false}, // 11
            {'groups': [13], 'matches': [32], 'started': false, 'ended': false}, // 12
            {'groups': [14], 'matches': [33], 'started': false, 'ended': false}, // 13
            {'groups': [15], 'matches': [34], 'started': false, 'ended': false}, // 14
            {'groups': [16], 'matches': [35], 'started': false, 'ended': false}, // 15

            // Wild Sprinter
            {'groups': [17], 'matches': [36, 37, 38], 'started': true, 'ended': true}, // 16
            {'groups': [18], 'matches': [39], 'started': true, 'ended': true} // 17
        ],
        "groups": [
            // SF Descartes Competition 2012
            {'n-winners': 4, 'participantIDs': [8, 9, 10, 11, 12, 13, 14, 15], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [1, 1, 0, 0, 1, 1, 0, 0]}]}, // 0
            {'n-winners': 2, 'participantIDs': [8, 9, 12, 13], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [1, 0, 1, 0]}]}, // 1
            {'n-winners': 1, 'participantIDs': [8, 12], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [1, 0]}]}, // 2

            // The Beautiful Faces
            {'n-winners': 11, 'participantIDs': [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': [29, 15, 32, 16, 18, 40, 52, 13, 16, 6, 16, 29, 14, 15]}, {'name': 'Total Raters', 'decreasing': true, 'points': [15, 8, 19, 12, 7, 22, 25, 8, 16, 18, 11, 12, 8, 7]}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': [89, 67, 82, 78, 50, 68, 77, 56, 78, 100, 87, 56, 44, 16]}]}, // 3
            {'n-winners': 8, 'participantIDs': [36, 37, 38, 39, 40, 41, 42, 44, 46, 47, 49], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': [29, 15, 16, 18, 40, 13, 6, 16, 29, 14, 15]}, {'name': 'Total Raters', 'decreasing': true, 'points': [15, 8, 19, 7, 22, 8, 16, 11, 12, 8, 7]}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': [89, 67, 68, 77, 56, 78, 100, 87, 56, 44, 16]}]}, // 4
            {'n-winners': 5, 'participantIDs': [36, 37, 38, 39, 40, 44, 46, 49], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': [29, 15, 13, 6, 16, 29, 14, 15]}, {'name': 'Total Raters', 'decreasing': true, 'points': [15, 8, 19, 7, 11, 12, 8, 7]}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': [89, 67, 68, 77, 56, 56, 44, 16]}]}, // 5
            {'n-winners': 3, 'participantIDs': [36, 37, 40, 44, 49], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': [29, 15, 29, 14, 15]}, {'name': 'Total Raters', 'decreasing': true, 'points': [15, 8, 19, 7, 7]}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': [89, 67, 68, 44, 16]}]}, // 6

            // 3 vs 3 Soccer 2013
            {'n-winners': 2, 'participantIDs': [0, 1, 2, 3], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [9, 1, 6, 1]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [14, 8, 15, 7]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [6, 12, 10, 16]}]}, // 7
            {'n-winners': 2, 'participantIDs': [4, 5, 6, 7], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [7, 6, 0, 4]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [14, 20, 6, 10]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [7, 16, 17, 10]}]}, // 8
            {'n-winners': 2, 'participantIDs': [0, 2, 4, 5], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [1, 0, 1, 0]}]}, // 9
            {'n-winners': 1, 'participantIDs': [0, 4], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [0, 1]}]}, // 10

            // Machine Learning
            {'n-winners': 3, 'participantIDs': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'points-list': [{'name': 'Total Test Error', 'decreasing': false, 'points': [2245, 1855, 2918, 2916, 2228, 2928, 2776, 2464, 3317, 2161]}]}, // 11

            // The Voice We Love
            {'n-winners': 10, 'participantIDs': [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': []}, {'name': 'Total Raters', 'decreasing': true, 'points': []}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': []}]}, // 12
            {'n-winners': 8, 'participantIDs': [], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': []}, {'name': 'Total Raters', 'decreasing': true, 'points': []}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': []}]}, // 13
            {'n-winners': 6, 'participantIDs': [], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': []}, {'name': 'Total Raters', 'decreasing': true, 'points': []}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': []}]}, // 14
            {'n-winners': 4, 'participantIDs': [], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': []}, {'name': 'Total Raters', 'decreasing': true, 'points': []}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': []}]}, // 15
            {'n-winners': 2, 'participantIDs': [], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': []}, {'name': 'Total Raters', 'decreasing': true, 'points': []}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': []}]}, // 16

            // Wild Sprinter
            {'n-winners': 4, 'participantIDs': [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'points-list': [{'name': 'Total Miliseconds', 'decreasing': false, 'points': [34035, 43605, 49056, 50352, 55035, 47013, 52605, 52065, 58659, 52626]}]}, // 17
            {'n-winners': 2, 'participantIDs': [10, 11, 15, 12, 13, 17], 'points-list': [{'name': 'Total Miliseconds', 'decreasing': false, 'points': [14636, 11616, 10164, 13251, 13145, 11256]}]} // 18
        ],
        "matches": [
            // SF Descartes Competition 2012
            {'description': 'Played at Palo Alto High School', 'participantIDs': [8, 15], 'score-unit': 'problem', 'scores': [8, 4], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [1, 0]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 0
            {'description': 'Played at Palo Alto High School', 'participantIDs': [9, 14], 'score-unit': 'problem', 'scores': [8, 6], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [1, 0]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 1
            {'description': 'Played at Palo Alto High School', 'participantIDs': [10, 13], 'score-unit': 'problem', 'scores': [4, 8], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [0, 1]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 2
            {'description': 'Played at Palo Alto High School', 'participantIDs': [11, 12], 'score-unit': 'problem', 'scores': [2, 8], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [0, 1]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 3
            {'description': 'Played at Palo Alto High School', 'participantIDs': [8, 13], 'score-unit': 'problem', 'scores': [8, 4], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [1, 0]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 4
            {'description': 'Played at Palo Alto High School', 'participantIDs': [9, 12], 'score-unit': 'problem', 'scores': [7, 8], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [0, 1]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 5
            {'description': 'Played at Palo Alto High School', 'participantIDs': [8, 12], 'score-unit': 'problem', 'scores': [8, 5], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [1, 0]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 6

            // The Beautiful Faces
            {'description': 'Submit a WL photo', 'participantIDs': [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 'score-unit': 'point', 'scores': [29, 15, 32, 16, 18, 40, 52, 13, 16, 6, 16, 29, 14, 15], 'points-list': [{'name': 'Total Ratings', 'points': [29, 15, 32, 16, 18, 40, 52, 13, 16, 6, 16, 29, 14, 15]}, {'name': 'Total Raters', 'points': [15, 8, 19, 12, 7, 22, 25, 8, 16, 18, 11, 12, 8, 7]}, {'name': 'Minutes Elapsed', 'points': [89, 67, 82, 78, 50, 68, 77, 56, 78, 100, 87, 56, 44, 16]}], 'submissions': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 7
            {'description': 'Submit a WL photo', 'participantIDs': [36, 37, 38, 39, 40, 41, 42, 44, 46, 47, 49], 'score-unit': 'point', 'scores': [29, 15, 16, 18, 40, 13, 6, 16, 29, 14, 15], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': [29, 15, 16, 18, 40, 13, 6, 16, 29, 14, 15]}, {'name': 'Total Raters', 'decreasing': true, 'points': [15, 8, 19, 7, 22, 8, 16, 11, 12, 8, 7]}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': [89, 67, 68, 77, 56, 78, 100, 87, 56, 44, 16]}], 'submissions': [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 8
            {'description': 'Submit a WL photo', 'participantIDs': [36, 37, 38, 39, 40, 44, 46, 49], 'score-unit': 'point', 'scores': [29, 15, 13, 6, 16, 29, 14, 15], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': [29, 15, 13, 6, 16, 29, 14, 15]}, {'name': 'Total Raters', 'decreasing': true, 'points': [15, 8, 19, 7, 11, 12, 8, 7]}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': [89, 67, 68, 77, 56, 56, 44, 16]}], 'submissions': [25, 26, 27, 28, 29, 30, 31, 32], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 9
            {'description': 'Submit a WL photo', 'participantIDs': [36, 37, 40, 44, 49], 'score-unit': 'point', 'scores': [29, 15, 29, 14, 15], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': [29, 15, 29, 14, 15]}, {'name': 'Total Raters', 'decreasing': true, 'points': [15, 8, 19, 7, 7]}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': [89, 67, 68, 44, 16]}], 'submissions': [33, 34, 35, 36, 37], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 10

            // 3 vs 3 Soccer 2013
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [0, 1], 'score-unit': 'goal', 'scores': [3, 2], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [3, 0]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [3, 2]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [2, 3]}], 'submissions': [], 'reviews': [], 'media': [0, 1, 2, 3], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 11
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [0, 2], 'score-unit': 'goal', 'scores': [6, 3], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [3, 0]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [6, 3]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [3, 6]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 12
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [0, 3], 'score-unit': 'goal', 'scores': [5, 1], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [3, 0]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [5, 1]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [1, 5]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 13
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [1, 2], 'score-unit': 'goal', 'scores': [2, 5], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [0, 3]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [2, 5]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [5, 2]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 14
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [1, 3], 'score-unit': 'goal', 'scores': [4, 4], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [1, 1]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [4, 4]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [4, 4]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 15
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [2, 3], 'score-unit': 'goal', 'scores': [7, 2], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [3, 0]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [7, 2]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [2, 7]}], 'submissions': [], 'reviews': [], 'media': [4, 5, 6, 7, 8, 9], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 16
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [4, 5], 'score-unit': 'goal', 'scores': [8, 4], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [3, 0]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [8, 4]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [4, 8]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 17
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [4, 6], 'score-unit': 'goal', 'scores': [5, 2], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [3, 0]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [5, 2]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [2, 5]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 18
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [4, 7], 'score-unit': 'goal', 'scores': [1, 1], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [1, 1]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [1, 1]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [1, 1]}], 'submissions': [], 'reviews': [], 'media': [10, 11, 12, 13, 14], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 19
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [5, 6], 'score-unit': 'goal', 'scores': [7, 4], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [3, 0]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [7, 4]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [4, 7]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 20
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [5, 7], 'score-unit': 'goal', 'scores': [9, 4], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [3, 0]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [9, 4]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [4, 9]}], 'submissions': [], 'reviews': [], 'media': [15, 16, 17], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 21
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [6, 7], 'score-unit': 'goal', 'scores': [0, 5], 'points-list': [{'name': 'Points', 'decreasing': true, 'points': [0, 3]}, {'name': 'Goals Gain', 'decreasing': true, 'points': [0, 5]}, {'name': 'Goals Lost', 'decreasing': false, 'points': [5, 0]}], 'submissions': [], 'reviews': [], 'media': [18, 19], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 22
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [0, 5], 'score-unit': 'goal', 'scores': [7, 5], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [1, 0]}], 'submissions': [], 'reviews': [], 'media': [20, 21, 22, 23], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 23
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [2, 4], 'score-unit': 'goal', 'scores': [4, 8], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [0, 1]}], 'submissions': [], 'reviews': [], 'media': [24, 25, 26, 27], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 24
            {'description': 'Played at Stanford Ford Center', 'participantIDs': [0, 4], 'score-unit': 'goal', 'scores': [2, 3], 'points-list': [{'name': 'Winning', 'decreasing': true, 'points': [0, 1]}], 'submissions': [], 'reviews': [], 'media': [28, 29, 30, 31], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 25

            // Machine Learning
            {'description': 'Submit Code to problem 1', 'participantIDs': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'score-unit': '/1000', 'scores': [435, 531, 522, 643, 225, 532, 423, 452, 686, 325], 'points-list': [{'name': 'Total Test Error', 'decreasing': false, 'points': [435, 531, 522, 643, 225, 532, 423, 452, 686, 325]}], 'submissions': [38, 39, 40, 41, 42, 43, 44, 45, 46, 47], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 26
            {'description': 'Submit Code to problem 2', 'participantIDs': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'score-unit': '/1000', 'scores': [413, 431, 626, 165, 462, 424, 1000, 532, 412, 432], 'points-list': [{'name': 'Total Test Error', 'decreasing': false, 'points': [413, 431, 626, 165, 462, 424, 1000, 532, 412, 432]}], 'submissions': [48, 49, 50, 51, 52, 53, undefined, 54, 55, 56], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 27
            {'description': 'Submit Code to problem 3', 'participantIDs': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'score-unit': '/1000', 'scores': [334, 346, 224, 1000, 642, 616, 342, 645, 1000, 534], 'points-list': [{'name': 'Total Test Error', 'decreasing': false, 'points': [334, 346, 224, 1000, 642, 616, 342, 645, 1000, 534]}], 'submissions': [57, 58, 59, undefined, 60, 61, 62, 63, 64, 65], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 28
            {'description': 'Submit Code to problem 4', 'participantIDs': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'score-unit': '/1000', 'scores': [432, 125, 546, 754, 432, 1000, 575, 321, 435, 433], 'points-list': [{'name': 'Total Test Error', 'decreasing': false, 'points': [432, 125, 546, 754, 432, 1000, 575, 321, 435, 433]}], 'submissions': [66, 67, 68, 69, 70, 71, 72, 73, 74, 75], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 29
            {'description': 'Submit Code to problem 5', 'participantIDs': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'score-unit': '/1000', 'scores': [631, 422, 1000, 354, 467, 356, 436, 514, 784, 437], 'points-list': [{'name': 'Total Test Error', 'decreasing': false, 'points': [631, 422, 1000, 354, 467, 356, 436, 514, 784, 437]}], 'submissions': [76, 77, 78, 79, 80, 81, 82, 83, 84, 85], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 30

            // The Voice We Love
            {'description': 'type a match description', 'participantIDs': [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 'score-unit': 'point', 'scores': [], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': []}, {'name': 'Total Raters', 'decreasing': true, 'points': []}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': []}], 'submissions': [], 'reviews': [], 'media': [], 'started': false, 'ended-by': false}, // 31
            {'description': 'type a match description', 'participantIDs': [], 'score-unit': 'point', 'scores': [], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': []}, {'name': 'Total Raters', 'decreasing': true, 'points': []}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': []}], 'submissions': [], 'reviews': [], 'media': [], 'started': false, 'ended-by': false}, // 32
            {'description': 'type a match description', 'participantIDs': [], 'score-unit': 'point', 'scores': [], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': []}, {'name': 'Total Raters', 'decreasing': true, 'points': []}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': []}], 'submissions': [], 'reviews': [], 'media': [], 'started': false, 'ended-by': false}, // 33
            {'description': 'type a match description', 'participantIDs': [], 'score-unit': 'point', 'scores': [], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': []}, {'name': 'Total Raters', 'decreasing': true, 'points': []}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': []}], 'submissions': [], 'reviews': [], 'media': [], 'started': false, 'ended-by': false}, // 34
            {'description': 'type a match description', 'participantIDs': [], 'score-unit': 'point', 'scores': [], 'points-list': [{'name': 'Total Ratings', 'decreasing': true, 'points': []}, {'name': 'Total Raters', 'decreasing': true, 'points': []}, {'name': 'Minutes Elapsed', 'decreasing': false, 'points': []}], 'submissions': [], 'reviews': [], 'media': [], 'started': false, 'ended-by': false}, // 35

            // Wild Sprinter
            {'description': 'Played at Stanford Track Field', 'participantIDs': [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'score-unit': 'milisecond', 'scores': [11345, 14535, 16352, 16784, 18345, 15671, 17535, 17355, 19553, 17542], 'points-list': [{'name': 'Total Miliseconds', 'decreasing': false, 'points': [11345, 14535, 16352, 16784, 18345, 15671, 17535, 17355, 19553, 17542]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 36
            {'description': 'Played at Stanford Track Field', 'participantIDs': [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'score-unit': 'milisecond', 'scores': [11345, 14535, 16352, 16784, 18345, 15671, 17535, 17355, 19553, 17542], 'points-list': [{'name': 'Total Miliseconds', 'decreasing': false, 'points': [11345, 14535, 16352, 16784, 18345, 15671, 17535, 17355, 19553, 17542]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 37
            {'description': 'Played at Stanford Track Field', 'participantIDs': [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'score-unit': 'milisecond', 'scores': [11345, 14535, 16352, 16784, 18345, 15671, 17535, 17355, 19553, 17542], 'points-list': [{'name': 'Total Miliseconds', 'decreasing': false, 'points': [11345, 14535, 16352, 16784, 18345, 15671, 17535, 17355, 19553, 17542]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}}, // 38
            {'description': 'Played at Stanford Track Field', 'participantIDs': [10, 11, 15, 12, 13, 17], 'score-unit': 'milisecond', 'scores': [14636, 11616, 10164, 13251, 13145, 11256], 'points-list': [{'name': 'Total Miliseconds', 'decreasing': false, 'points': [14636, 11616, 10164, 13251, 13145, 11256]}], 'submissions': [], 'reviews': [], 'media': [], 'started': true, 'ended-by': {'duration': 90, 'max-score': undefined}} // 39
        ],
        "submissions": [
            {'type': 'image', 'src': 'submissions/images/img0.jpg'}, // 0
            {'type': 'image', 'src': 'submissions/images/img1.jpg'}, // 1
            {'type': 'image', 'src': 'submissions/images/img2.jpg'}, // 2
            {'type': 'image', 'src': 'submissions/images/img3.jpg'}, // 3
            {'type': 'image', 'src': 'submissions/images/img4.jpg'}, // 4
            {'type': 'image', 'src': 'submissions/images/img5.jpg'}, // 5
            {'type': 'image', 'src': 'submissions/images/img6.jpg'}, // 6
            {'type': 'image', 'src': 'submissions/images/img7.jpg'}, // 7
            {'type': 'image', 'src': 'submissions/images/img8.jpg'}, // 8
            {'type': 'image', 'src': 'submissions/images/img9.jpg'}, // 9
            {'type': 'image', 'src': 'submissions/images/img10.jpg'}, // 10
            {'type': 'image', 'src': 'submissions/images/img11.jpg'}, // 11
            {'type': 'image', 'src': 'submissions/images/img12.jpg'}, // 12
            {'type': 'image', 'src': 'submissions/images/img13.jpg'}, // 13
            {'type': 'image', 'src': 'submissions/images/img14.jpg'}, // 14
            {'type': 'image', 'src': 'submissions/images/img15.jpg'}, // 15
            {'type': 'image', 'src': 'submissions/images/img16.jpg'}, // 16
            {'type': 'image', 'src': 'submissions/images/img17.jpg'}, // 17
            {'type': 'image', 'src': 'submissions/images/img18.jpg'}, // 18
            {'type': 'image', 'src': 'submissions/images/img19.jpg'}, // 19
            {'type': 'image', 'src': 'submissions/images/img20.jpg'}, // 20
            {'type': 'image', 'src': 'submissions/images/img21.jpg'}, // 21
            {'type': 'image', 'src': 'submissions/images/img22.jpg'}, // 22
            {'type': 'image', 'src': 'submissions/images/img23.jpg'}, // 23
            {'type': 'image', 'src': 'submissions/images/img24.jpg'}, // 24
            {'type': 'image', 'src': 'submissions/images/img25.jpg'}, // 25
            {'type': 'image', 'src': 'submissions/images/img26.jpg'}, // 26
            {'type': 'image', 'src': 'submissions/images/img27.jpg'}, // 27
            {'type': 'image', 'src': 'submissions/images/img28.jpg'}, // 28
            {'type': 'image', 'src': 'submissions/images/img29.jpg'}, // 29
            {'type': 'image', 'src': 'submissions/images/img30.jpg'}, // 30
            {'type': 'image', 'src': 'submissions/images/img31.jpg'}, // 31
            {'type': 'image', 'src': 'submissions/images/img32.jpg'}, // 32
            {'type': 'image', 'src': 'submissions/images/img33.jpg'}, // 33
            {'type': 'image', 'src': 'submissions/images/img34.jpg'}, // 34
            {'type': 'image', 'src': 'submissions/images/img35.jpg'}, // 35
            {'type': 'image', 'src': 'submissions/images/img36.jpg'}, // 36
            {'type': 'image', 'src': 'submissions/images/img37.jpg'}, // 37
            {'type': 'text', 'src': 'submissions/texts/text38.txt'}, // 38
            {'type': 'text', 'src': 'submissions/texts/text39.txt'}, // 39
            {'type': 'text', 'src': 'submissions/texts/text40.txt'}, // 40
            {'type': 'text', 'src': 'submissions/texts/text41.txt'}, // 41
            {'type': 'text', 'src': 'submissions/texts/text42.txt'}, // 42
            {'type': 'text', 'src': 'submissions/texts/text43.txt'}, // 43
            {'type': 'text', 'src': 'submissions/texts/text44.txt'}, // 44
            {'type': 'text', 'src': 'submissions/texts/text45.txt'}, // 45
            {'type': 'text', 'src': 'submissions/texts/text46.txt'}, // 46
            {'type': 'text', 'src': 'submissions/texts/text47.txt'}, // 47
            {'type': 'text', 'src': 'submissions/texts/text48.txt'}, // 48
            {'type': 'text', 'src': 'submissions/texts/text49.txt'}, // 49
            {'type': 'text', 'src': 'submissions/texts/text50.txt'}, // 50
            {'type': 'text', 'src': 'submissions/texts/text51.txt'}, // 51
            {'type': 'text', 'src': 'submissions/texts/text52.txt'}, // 52
            {'type': 'text', 'src': 'submissions/texts/text53.txt'}, // 53
            {'type': 'text', 'src': 'submissions/texts/text54.txt'}, // 54
            {'type': 'text', 'src': 'submissions/texts/text55.txt'}, // 55
            {'type': 'text', 'src': 'submissions/texts/text56.txt'}, // 56
            {'type': 'text', 'src': 'submissions/texts/text57.txt'}, // 57
            {'type': 'text', 'src': 'submissions/texts/text58.txt'}, // 58
            {'type': 'text', 'src': 'submissions/texts/text59.txt'}, // 59
            {'type': 'text', 'src': 'submissions/texts/text60.txt'}, // 60
            {'type': 'text', 'src': 'submissions/texts/text61.txt'}, // 61
            {'type': 'text', 'src': 'submissions/texts/text62.txt'}, // 62
            {'type': 'text', 'src': 'submissions/texts/text63.txt'}, // 63
            {'type': 'text', 'src': 'submissions/texts/text64.txt'}, // 64
            {'type': 'text', 'src': 'submissions/texts/text65.txt'}, // 65
            {'type': 'text', 'src': 'submissions/texts/text66.txt'}, // 66
            {'type': 'text', 'src': 'submissions/texts/text67.txt'}, // 67
            {'type': 'text', 'src': 'submissions/texts/text68.txt'}, // 68
            {'type': 'text', 'src': 'submissions/texts/text69.txt'}, // 69
            {'type': 'text', 'src': 'submissions/texts/text70.txt'}, // 70
            {'type': 'text', 'src': 'submissions/texts/text71.txt'}, // 71
            {'type': 'text', 'src': 'submissions/texts/text72.txt'}, // 72
            {'type': 'text', 'src': 'submissions/texts/text73.txt'}, // 73
            {'type': 'text', 'src': 'submissions/texts/text74.txt'}, // 74
            {'type': 'text', 'src': 'submissions/texts/text75.txt'}, // 75
            {'type': 'text', 'src': 'submissions/texts/text76.txt'}, // 76
            {'type': 'text', 'src': 'submissions/texts/text77.txt'}, // 77
            {'type': 'text', 'src': 'submissions/texts/text78.txt'}, // 78
            {'type': 'text', 'src': 'submissions/texts/text79.txt'}, // 79
            {'type': 'text', 'src': 'submissions/texts/text80.txt'}, // 80
            {'type': 'text', 'src': 'submissions/texts/text81.txt'}, // 81
            {'type': 'text', 'src': 'submissions/texts/text82.txt'}, // 82
            {'type': 'text', 'src': 'submissions/texts/text83.txt'}, // 83
            {'type': 'text', 'src': 'submissions/texts/text84.txt'}, // 84
            {'type': 'text', 'src': 'submissions/texts/text85.txt'} // 85
        ],
        "media": [
            {'by': 0, 'type': 'image', 'src': 'media/images/img0.jpg'}, // 0
            {'by': 0, 'type': 'image', 'src': 'media/images/img1.jpg'}, // 1
            {'by': 0, 'type': 'image', 'src': 'media/images/img2.jpg'}, // 2
            {'by': 0, 'type': 'image', 'src': 'media/images/img3.jpg'}, // 3
            {'by': 0, 'type': 'image', 'src': 'media/images/img4.jpg'}, // 4
            {'by': 0, 'type': 'image', 'src': 'media/images/img5.jpg'}, // 5
            {'by': 0, 'type': 'image', 'src': 'media/images/img6.jpg'}, // 6
            {'by': 0, 'type': 'image', 'src': 'media/images/img7.jpg'}, // 7
            {'by': 0, 'type': 'image', 'src': 'media/images/img8.jpg'}, // 8
            {'by': 0, 'type': 'image', 'src': 'media/images/img9.jpg'}, // 9
            {'by': 0, 'type': 'image', 'src': 'media/images/img10.jpg'}, // 10
            {'by': 0, 'type': 'image', 'src': 'media/images/img11.jpg'}, // 11
            {'by': 0, 'type': 'image', 'src': 'media/images/img12.jpg'}, // 12
            {'by': 0, 'type': 'image', 'src': 'media/images/img13.jpg'}, // 13
            {'by': 0, 'type': 'image', 'src': 'media/images/img14.jpg'}, // 14
            {'by': 0, 'type': 'image', 'src': 'media/images/img15.jpg'}, // 15
            {'by': 0, 'type': 'image', 'src': 'media/images/img16.jpg'}, // 16
            {'by': 0, 'type': 'image', 'src': 'media/images/img17.jpg'}, // 17
            {'by': 0, 'type': 'image', 'src': 'media/images/img18.jpg'}, // 18
            {'by': 0, 'type': 'image', 'src': 'media/images/img19.jpg'}, // 19
            {'by': 0, 'type': 'image', 'src': 'media/images/img20.jpg'}, // 20
            {'by': 0, 'type': 'image', 'src': 'media/images/img21.jpg'}, // 21
            {'by': 0, 'type': 'image', 'src': 'media/images/img22.jpg'}, // 22
            {'by': 0, 'type': 'image', 'src': 'media/images/img23.jpg'}, // 23
            {'by': 0, 'type': 'image', 'src': 'media/images/img24.jpg'}, // 24
            {'by': 0, 'type': 'image', 'src': 'media/images/img25.jpg'}, // 25
            {'by': 0, 'type': 'image', 'src': 'media/images/img26.jpg'}, // 26
            {'by': 0, 'type': 'image', 'src': 'media/images/img27.jpg'}, // 27
            {'by': 0, 'type': 'image', 'src': 'media/images/img28.jpg'}, // 28
            {'by': 0, 'type': 'image', 'src': 'media/images/img29.jpg'}, // 29
            {'by': 0, 'type': 'image', 'src': 'media/images/img30.jpg'}, // 30
            {'by': 0, 'type': 'image', 'src': 'media/images/img31.jpg'} // 31
        ],
        "champion-photos": [
            {'by': 8, 'type': 'image', 'src': 'champions/champ0.jpg'}, // 0
            {'by': 40, 'type': 'image', 'src': 'champions/champ1.jpg'}, // 1
            {'by': 36, 'type': 'image', 'src': 'champions/champ2.jpg'}, // 2
            {'by': 37, 'type': 'image', 'src': 'champions/champ3.jpg'}, // 3
            {'by': 4, 'type': 'image', 'src': 'champions/champ4.jpg'}, // 4
            {'by': 15, 'type': 'image', 'src': 'champions/champ5.jpg'}, // 5
            {'by': 17, 'type': 'image', 'src': 'champions/champ6.jpg'} // 6
        ]
    }
};