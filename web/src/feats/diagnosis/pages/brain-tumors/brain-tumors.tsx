import React from "react";
import { ContentWrapper, Layout, PickedImage } from "@core/components";
import { Title } from "@core/components/typography/title/title";
import { Subtitle } from "@core/components/typography/subtitle/subtitle";
import {
    DiagnosisLayout,
    LeftDiagnosisLayout,
    RightDiagnosisLayout
} from "@feats/diagnosis/components/diagnosis-layout/diagnosis-layout";
import { Button, Divider, FileUpload } from "react-untitled-ui";
import { PredictionResults } from "@feats/diagnosis/components/prediction-results/prediction-results";
import { useBrainTumors } from "@feats/diagnosis/pages/brain-tumors/use-brain-tumors";
import Head from "next/head";

export type BrainCancerProps = {}

export const BrainTumors: React.FC<BrainCancerProps> = () => {
    const {file, clearFile, onPick, loading, handleButtonClick, predictions} = useBrainTumors()

    return <Layout>
        <Head>
            <title>Диагностика опухолей мозга | Lumi</title>
        </Head>
        <ContentWrapper>
            <Title>Диагностика опухолей мозга</Title>
            <Subtitle>Автоматическая диагностика злокачественных опухолей по МРТ головного мозга</Subtitle>
            <DiagnosisLayout>
                <LeftDiagnosisLayout>
                    {
                        file
                            ? <PickedImage onClick={ clearFile } file={ file }/>
                            : <FileUpload
                                onDrop={ onPick }
                                buttonText="Нажмите"
                                text="чтобы загрузить МРТ"
                                subText="Изображение в JPEG или JPG"/>
                    }
                    <Button
                        loading={ loading }
                        disabled={ !file }
                        onClick={ handleButtonClick }
                        fullWidth>
                        Диагностировать
                    </Button>
                </LeftDiagnosisLayout>
                <Divider type="vertical"/>
                <RightDiagnosisLayout>
                    <PredictionResults
                        predictions={ predictions }
                        notFoundText={ !file
                            ? "Сначала вам необходимо загрузить МРТ"
                            : "Нажмите на кнопку Диагностировать, чтобы получить результаты"
                        }/>
                </RightDiagnosisLayout>
            </DiagnosisLayout>
        </ContentWrapper>
    </Layout>
}