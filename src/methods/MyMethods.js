import moment from 'moment';

class _MyMethods {
  get_calender_months = () => {
    const today = new Date();
    //const yesterday = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const months = [];

    // Add current month
    months.push({
      label: 'Today',
      value: today.toISOString().split('T')[0],
    });
    months.push({
      label: 'Yesterday',
      value: yesterday.toISOString().split('T')[0],
    });
    months.push({
      label: 'Custom',
      value: 'custom',
    });

    for (let i = 1; i <= 6; i++) {
      const nextMonth = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const monthName = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
      }).format(nextMonth);

      months.push({
        label: monthName,
        value: nextMonth.toISOString().split('T')[0],
      });
    }
    return months;
  };

  check_current_day = ({ date = new Date(), type = 'equal' }) => {
    try {
      const targetDate = new Date(moment(date).format('YYYY-MM-DD'));
      const today = new Date();
      if (type == 'equal') {
        if (
          targetDate.getDate() === today.getDate() &&
          targetDate.getMonth() === today.getMonth() &&
          targetDate.getFullYear() === today.getFullYear()
        ) {
          return true;
        }
        return false;
      } else if (type == 'greater') {
        if (
          targetDate.getDate() <= today.getDate() &&
          targetDate.getMonth() <= today.getMonth() &&
          targetDate.getFullYear() <= today.getFullYear()
        ) {
          return true;
        }
        return false;
      }
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  generateUniqueId = () => {
    const timestamp = Date.now().toString(16); // Convert current timestamp to hexadecimal
    const randomString = Math.random().toString(16).substr(2, 8); // Generate a random hexadecimal string

    // Combine timestamp and random string, and ensure it is 16 characters long
    const uniqueId = (timestamp + randomString).substr(0, 16);

    return uniqueId;
  }

}

export const MyMethods = new _MyMethods();
