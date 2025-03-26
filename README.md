# Balance Sheet Table Prototype

A prototype for displaying and editing company balance sheets with collapsible sections and automatic total calculations.

## Features

- Hierarchical table structure with collapsible sections
- Level-based indentation and styling
- Editable fields for data entry
- Automatic total calculations for parent sections
- Support for negative values with visual indicators
- Responsive design
- CSV data structure support

## Project Structure

```
prototype-table/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── sheet structuur.csv # Data structure template
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Python 3.x (for running the development server)

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/prototype-table.git
   cd prototype-table
   ```

2. Start the development server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Usage

1. The table displays three main sections:
   - ACTIVA (Assets)
   - PASSIVA (Liabilities)
   - RESULTATENREKENING (Income Statement)

2. Each section can be collapsed/expanded using the arrow icons (▼/▶)

3. Enter values in the editable fields to:
   - Update individual row values
   - See automatic total calculations for parent sections
   - Track changes across different years

4. Negative values are automatically highlighted in red

## Data Structure

The table follows a hierarchical structure with:
- Level 0: Main sections (ACTIVA, PASSIVA, RESULTATENREKENING)
- Level 1: Major categories (e.g., VASTE ACTIVA, VLOTTENDE ACTIVA)
- Level 2: Individual items with specific codes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 