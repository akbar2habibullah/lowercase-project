import DocumentPicker, {
  DocumentPickerResponse,
  types,
} from 'react-native-document-picker';

export const pickDocuments = async (options?: any) => {
  try {
    const res: DocumentPickerResponse[] = await DocumentPicker.pick({
      type: [types.allFiles],
      ...options,
    });
    return res;
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      return false;
    } else {
      throw err;
    }
  }
};
