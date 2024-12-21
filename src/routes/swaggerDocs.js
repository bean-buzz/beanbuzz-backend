/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: The first name of the user.
 *         lastName:
 *           type: string
 *           description: The last name of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *         phoneNumber:
 *           type: string
 *           description: The phone number of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 *     PasswordResetRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: The email address for password reset request.
 *     PasswordReset:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: The reset token for updating password.
 *         password:
 *           type: string
 *           description: The new password.
 */

/**
 * @swagger
 * /register:
 *   post:
 *     tags:
 *       - User
 *     summary: Register a new user
 *     description: Adds a new user to the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request, invalid data
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - User
 *     summary: User login
 *     description: Authenticates a user and provides a token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Invalid email or password
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /request-password-reset:
 *   post:
 *     tags:
 *       - User
 *     summary: Request password reset
 *     description: Initiates a password reset for the user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PasswordResetRequest'
 *     responses:
 *       200:
 *         description: Password reset request initiated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /reset-password:
 *   post:
 *     tags:
 *       - User
 *     summary: Reset password
 *     description: Updates the user's password with a new one using the provided reset token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PasswordReset'
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Invalid token or password
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /protectedRoute:
 *   get:
 *     tags:
 *       - User
 *     summary: Access protected route
 *     description: Access a protected route that requires authentication.
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *         description: Bearer token for authentication
 *         schema:
 *           type: string
 *           example: Bearer <JWT_TOKEN>
 *     responses:
 *       200:
 *         description: Access granted to protected route
 *       401:
 *         description: Unauthorized access, invalid token
 *       500:
 *         description: Internal server error
 */

// MenuItem API

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         itemName:
 *           type: string
 *         category:
 *           type: string
 *         price:
 *           type: number
 *           format: float
 *         imageUrl:
 *           type: string
 *         description:
 *           type: string
 *         isAvailable:
 *           type: boolean
 *         multipleSizes:
 *           type: boolean
 *         sizes:
 *           type: object
 *           properties:
 *             small:
 *               type: object
 *               properties:
 *                 price:
 *                   type: number
 *             medium:
 *               type: object
 *               properties:
 *                 price:
 *                   type: number
 *             large:
 *               type: object
 *               properties:
 *                 price:
 *                   type: number
 *         dietaryInformation:
 *           type: object
 *           properties:
 *             isVegan:
 *               type: boolean
 *             isVegetarian:
 *               type: boolean
 *             isGlutenFree:
 *               type: boolean
 *             isDairyFree:
 *               type: boolean
 *             isHalal:
 *               type: boolean
 *             isKosher:
 *               type: boolean
 *             isBeefFree:
 *               type: boolean
 *         creationDate:
 *           type: string
 *           format: date-time
 *         lastUpdateDate:
 *           type: string
 *           format: date-time
 *     ItemUpdate:
 *       type: object
 *       properties:
 *         sizes:
 *           type: object
 *           properties:
 *             small:
 *               type: object
 *               properties:
 *                 price:
 *                   type: number
 *             medium:
 *               type: object
 *               properties:
 *                 price:
 *                   type: number
 *             large:
 *               type: object
 *               properties:
 *                 price:
 *                   type: number
 */

/**
 * @swagger
 * /menu/item/{itemId}:
 *   get:
 *     tags:
 *       - Menu Item
 *     summary: Get Item by Id
 *     description: Retrieves a menu item based on the provided item ID.
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         description: The ID of the item to retrieve
 *         schema:
 *           type: string
 *           example: 675bfbf149d385b570d1032a
 *     responses:
 *       200:
 *         description: Item details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /menu/item:
 *   post:
 *     tags:
 *       - Menu Item
 *     summary: Add Menu Item
 *     description: Adds a new menu item to the menu.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: Menu item created successfully
 *       400:
 *         description: Bad request, invalid data
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /menu/{categoryName}:
 *   get:
 *     tags:
 *       - Menu Item
 *     summary: Filter Category by Id
 *     description: Filters the menu items based on the provided category name.
 *     parameters:
 *       - name: categoryName
 *         in: path
 *         required: true
 *         description: The category name to filter by
 *         schema:
 *           type: string
 *           example: coffee
 *     responses:
 *       200:
 *         description: Items filtered by category retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /menu/item/{itemId}:
 *   delete:
 *     tags:
 *       - Menu Item
 *     summary: Delete Menu Item
 *     description: Deletes a menu item from the menu based on the item ID.
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         description: The ID of the item to delete
 *         schema:
 *           type: string
 *           example: 6756dd8be0a78bd5cd912a2c
 *     responses:
 *       200:
 *         description: Item deleted successfully
 *       404:
 *         description: Item not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /menu/item/{itemId}:
 *   put:
 *     tags:
 *       - Menu Item
 *     summary: Update Menu Item by Id
 *     description: Updates the details of a menu item based on the item ID.
 *     parameters:
 *       - name: itemId
 *         in: path
 *         required: true
 *         description: The ID of the item to update
 *         schema:
 *           type: string
 *           example: 675ec3095767b86a8d7035fb
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemUpdate'
 *     responses:
 *       200:
 *         description: Item updated successfully
 *       400:
 *         description: Bad request, invalid data
 *       404:
 *         description: Item not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /menu:
 *   get:
 *     tags:
 *       - Menu Item
 *     summary: View Entire Menu
 *     description: Retrieves the entire menu with all available items.
 *     responses:
 *       200:
 *         description: All menu items retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 *       500:
 *         description: Internal server error
 */

// Order API

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique ID of the order.
 *         tableNumber:
 *           type: string
 *           description: The table number for the order.
 *         customerName:
 *           type: string
 *           description: The name of the customer who placed the order.
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               menuItem:
 *                 type: string
 *                 description: The name of the menu item ordered.
 *               size:
 *                 type: string
 *                 description: The size of the menu item ordered.
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the menu item ordered.
 *         orderStatus:
 *           type: string
 *           description: The status of the order (e.g., pending, completed).
 *         paymentStatus:
 *           type: string
 *           description: The payment status (e.g., paid, unpaid).
 *         totalAmount:
 *           type: number
 *           format: float
 *           description: The total amount for the order.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the order was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the order was last updated.
 *     OrderUpdate:
 *       type: object
 *       properties:
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               menuItem:
 *                 type: string
 *               size:
 *                 type: string
 *               quantity:
 *                 type: integer
 *         orderStatus:
 *           type: string
 *         paymentStatus:
 *           type: string
 *         totalAmount:
 *           type: number
 *           format: float
 */

/**
 * @swagger
 * /order/{orderId}:
 *   get:
 *     tags:
 *       - Order
 *     summary: Get Order by Id
 *     description: Retrieves an order based on the provided order ID.
 *     parameters:
 *       - name: orderId
 *         in: path
 *         required: true
 *         description: The ID of the order to retrieve
 *         schema:
 *           type: string
 *           example: 675bfbf149d385b570d1032a
 *     responses:
 *       200:
 *         description: Order details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order:
 *   post:
 *     tags:
 *       - Order
 *     summary: Create Order
 *     description: Adds a new order to the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Bad request, invalid data
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order/{orderId}:
 *   put:
 *     tags:
 *       - Order
 *     summary: Update Order by Id
 *     description: Updates the details of an order based on the order ID.
 *     parameters:
 *       - name: orderId
 *         in: path
 *         required: true
 *         description: The ID of the order to update
 *         schema:
 *           type: string
 *           example: 675ec3095767b86a8d7035fb
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderUpdate'
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       400:
 *         description: Bad request, invalid data
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order/{orderId}:
 *   delete:
 *     tags:
 *       - Order
 *     summary: Delete Order
 *     description: Deletes an order based on the order ID.
 *     parameters:
 *       - name: orderId
 *         in: path
 *         required: true
 *         description: The ID of the order to delete
 *         schema:
 *           type: string
 *           example: 6756dd8be0a78bd5cd912a2c
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order:
 *   get:
 *     tags:
 *       - Order
 *     summary: View All Orders
 *     description: Retrieves all orders placed in the system.
 *     responses:
 *       200:
 *         description: All orders retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order/user-history/{customerName}:
 *   get:
 *     tags:
 *       - Order
 *     summary: Get Orders by Customer Name
 *     description: Retrieves all orders placed by a specific customer.
 *     parameters:
 *       - name: customerName
 *         in: path
 *         required: true
 *         description: The name of the customer whose orders to retrieve
 *         schema:
 *           type: string
 *           example: John Doe
 *     responses:
 *       200:
 *         description: Orders placed by the customer retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order/{id}/submit:
 *   post:
 *     tags:
 *       - Order
 *     summary: Submit an Order by Id
 *     description: This endpoint allows the submission of an order by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the order to be submitted.
 *         schema:
 *           type: string
 *           example: 675bfcd7abe8b624fc92d62e
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               authorization:
 *                 type: string
 *                 description: Bearer token for authentication
 *                 example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *     responses:
 *       200:
 *         description: Order successfully submitted.
 *       400:
 *         description: Invalid input.
 *       401:
 *         description: Unauthorized access.
 *       500:
 *         description: Internal server error.
 */

// reviews API

/**
 * @swagger
 * /reviews:
 *   post:
 *     tags:
 *       - Reviews
 *     summary: Create a new review
 *     description: Allows users to submit a new review with a rating, message, and review status.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: The name of the user submitting the review.
 *               rating:
 *                 type: integer
 *                 description: The rating given by the user (1 to 5).
 *               reviewMessage:
 *                 type: string
 *                 description: The review message or feedback.
 *               reviewStatus:
 *                 type: string
 *                 enum:
 *                   - approved
 *                   - declined
 *                 description: The status of the review (approved or declined).
 *           examples:
 *             example1:
 *               summary: A simple review submission
 *               value:
 *                 userName: "carla"
 *                 rating: 3
 *                 reviewMessage: "bad"
 *     responses:
 *       201:
 *         description: Review created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 review:
 *                   $ref: '#/components/schemas/Review'
 *             examples:
 *               example1:
 *                 summary: Example of a created review response
 *                 value:
 *                   review:
 *                     userName: "carla"
 *                     rating: 3
 *                     reviewMessage: "bad"
 *                     reviewStatus: "declined"
 *                     _id: "67663750e401ff8b5b03460c"
 *                     createdAt: "2024-12-21T03:34:40.419Z"
 *                     updatedAt: "2024-12-21T03:34:40.419Z"
 *                     __v: 0
 *       400:
 *         description: Bad request. Missing or invalid data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message for invalid request.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the review.
 *         userName:
 *           type: string
 *           description: The name of the user who wrote the review.
 *         rating:
 *           type: integer
 *           description: The rating provided by the user (1 to 5).
 *         reviewMessage:
 *           type: string
 *           description: The content of the review message.
 *         reviewStatus:
 *           type: string
 *           enum:
 *             - approved
 *             - declined
 *           description: The status of the review (approved or declined).
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the review was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the review was last updated.
 */

/**
 * @swagger
 * /reviews:
 *   get:
 *     tags:
 *       - Reviews
 *     summary: Get all reviews
 *     description: Retrieves a list of all reviews with pagination information.
 *     responses:
 *       200:
 *         description: A list of reviews with pagination info.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalReviews:
 *                   type: integer
 *                   description: Total number of reviews available.
 *                 numOfPages:
 *                   type: integer
 *                   description: Total number of pages based on pagination.
 *                 currentPage:
 *                   type: integer
 *                   description: The current page number.
 *                 reviews:
 *                   type: array
 *                   description: List of reviews.
 *                   items:
 *                     $ref: '#/components/schemas/Review'
 *             example:
 *               totalReviews: 0
 *               numOfPages: 0
 *               currentPage: 0
 *               reviews:
 *                 - _id: "string"
 *                   userName: "string"
 *                   rating: 2
 *                   reviewMessage: "string"
 *                   reviewStatus: "declined"  # Updated to "declined"
 *                   createdAt: "2024-12-21T03:01:00.584Z"
 *                   updatedAt: "2024-12-21T03:01:00.584Z"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 */

/**
 * @swagger
 *     tags:
 *       - Reviews
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the review.
 *         userName:
 *           type: string
 *           description: The name of the user who wrote the review.
 *         rating:
 *           type: integer
 *           description: The rating provided by the user (1 to 5).
 *         reviewMessage:
 *           type: string
 *           description: The content of the review message.
 *         reviewStatus:
 *           type: string
 *           enum:
 *             - approved
 *             - declined
 *           description: The status of the review (approved or declined).
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the review was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the review was last updated.
 */

/**
 * Get all reviews with pagination.
 * @route GET /reviews
 * @returns {Object} 200 - An object containing total reviews, number of pages, current page, and an array of reviews.
 * @returns {Error}  500 - Internal server error
 */

/**
 * @swagger
 * /reviews/{id}:
 *   get:
 *     tags:
 *       - Reviews
 *     summary: Get a single review by ID
 *     description: Retrieves a single review based on the provided review ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the review to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A review object corresponding to the provided review ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 review:
 *                   $ref: '#/components/schemas/Review'
 *             example:
 *               review:
 *                 _id: "676281a6475a13b2e16c769e"
 *                 userName: "Rose"
 *                 rating: 5
 *                 reviewMessage: "Love love this place, staff, food are just fantastic!!!"
 *                 reviewStatus: "approved"
 *                 createdAt: "2024-12-18T08:02:46.531Z"
 *                 updatedAt: "2024-12-21T00:53:01.834Z"
 *                 __v: 0
 *       400:
 *         description: Invalid review ID format.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating the invalid format.
 *       404:
 *         description: Review not found for the provided ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating that the review was not found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the review.
 *         userName:
 *           type: string
 *           description: The name of the user who wrote the review.
 *         rating:
 *           type: integer
 *           description: The rating provided by the user (1 to 5).
 *         reviewMessage:
 *           type: string
 *           description: The content of the review message.
 *         reviewStatus:
 *           type: string
 *           enum:
 *             - approved
 *             - declined
 *           description: The status of the review (approved or declined).
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the review was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the review was last updated.
 */

/**
 * Get a single review by its ID.
 * @route GET /reviews/{id}
 * @param {string} id.path.required - The ID of the review to retrieve.
 * @returns {Object} 200 - An object containing the review details.
 * @returns {Error}  400 - Bad request, invalid MongoDB id.
 * @returns {Error}  500 - Internal server error.
 */

/**
 * @swagger
 * /reviews/{id}:
 *   patch:
 *     tags:
 *       - Reviews
 *     summary: Update review status
 *     description: Allows updating the status of a review (approved or declined) by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the review to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: The name of the user submitting the updated review.
 *               rating:
 *                 type: integer
 *                 description: The rating provided by the user (1 to 5).
 *               reviewMessage:
 *                 type: string
 *                 description: The review message or feedback.
 *               reviewStatus:
 *                 type: string
 *                 enum:
 *                   - approved
 *                   - declined
 *                 description: The status of the review (approved or declined).
 *           examples:
 *             example1:
 *               summary: Example of patching review status to approved
 *               value:
 *                 userName: "Rahul"
 *                 rating: 5
 *                 reviewMessage: "Great"
 *                 reviewStatus: "approved"
 *     responses:
 *       200:
 *         description: Review successfully modified.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Message confirming the review was modified.
 *                 review:
 *                   $ref: '#/components/schemas/Review'
 *             examples:
 *               example1:
 *                 summary: Example of successful review modification
 *                 value:
 *                   msg: "review modified"
 *                   review:
 *                     _id: "676281a6475a13b2e16c769e"
 *                     userName: "Rahul"
 *                     rating: 5
 *                     reviewMessage: "Great"
 *                     reviewStatus: "approved"
 *                     createdAt: "2024-12-18T08:02:46.531Z"
 *                     updatedAt: "2024-12-21T00:53:01.834Z"
 *                     __v: 0
 *       400:
 *         description: Bad request. Missing or invalid data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message for invalid request.
 *       404:
 *         description: Review not found for the given ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message when the review ID is not found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the review.
 *         userName:
 *           type: string
 *           description: The name of the user who wrote the review.
 *         rating:
 *           type: integer
 *           description: The rating provided by the user (1 to 5).
 *         reviewMessage:
 *           type: string
 *           description: The content of the review message.
 *         reviewStatus:
 *           type: string
 *           enum:
 *             - approved
 *             - declined
 *           description: The status of the review (approved or declined).
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the review was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the review was last updated.
 */

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     tags:
 *       - Reviews
 *     summary: Delete a review by ID
 *     description: Deletes a review from the database by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique ID of the review to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Message confirming the review was deleted.
 *                 review:
 *                   $ref: '#/components/schemas/Review'
 *             examples:
 *               example1:
 *                 summary: Example of successful review deletion
 *                 value:
 *                   msg: "review deleted"
 *                   review:
 *                     _id: "67614de079229c125858bf47"
 *                     userName: "Jack"
 *                     rating: 4
 *                     reviewMessage: "Great"
 *                     reviewStatus: "declined"
 *                     createdAt: "2024-12-17T10:09:36.804Z"
 *                     updatedAt: "2024-12-20T09:08:40.324Z"
 *                     __v: 0
 *       404:
 *         description: Review not found for the given ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message when the review ID is not found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the review.
 *         userName:
 *           type: string
 *           description: The name of the user who wrote the review.
 *         rating:
 *           type: integer
 *           description: The rating provided by the user (1 to 5).
 *         reviewMessage:
 *           type: string
 *           description: The content of the review message.
 *         reviewStatus:
 *           type: string
 *           enum:
 *             - approved
 *             - declined
 *           description: The status of the review (approved or declined).
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the review was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the review was last updated.
 */
